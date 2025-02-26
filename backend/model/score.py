import os
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.graphics.shapes import Drawing
from reportlab.graphics.charts.lineplots import LinePlot
from reportlab.graphics.charts.textlabels import Label

def generate_analysis_pdf(user_list, file_name):
    """Analyse les erreurs, génère un score et crée un PDF avec un graphique."""
    
    # Référence des notes attendues
    REFERENCE_NOTES = [(329.628, 2), (261.626, 2), (329.628, 1), (329.628, 1), (261.626, 2),
                       (293.665, 1), (329.628, 1), (349.228, 1), (329.628, 1), (293.665, 1),
                       (391.995, 1), (329.628, 2), (261.626, 2), (329.628, 2), (261.626, 2),
                       (329.628, 1), (329.628, 1), (261.626, 2), (293.665, 1), (329.628, 1),
                       (349.228, 1), (329.628, 1), (293.665, 1), (391.995, 1), (261.626, 4)]
    
    NOTE_FREQUENCIES = {
        261.626: "DO", 277.183: "DO#", 293.665: "RÉ", 311.127: "RÉ#", 329.628: "MI",
        349.228: "FA", 369.994: "FA#", 391.995: "SOL", 415.305: "SOL#", 440.000: "LA",
        466.164: "LA#", 493.883: "SI", 523.251: "DO5"
    }

    # Comparaison des notes
    justesse_errors, tempo_errors = [], []
    total_justesse, total_tempo = 0, 0
    n = min(len(REFERENCE_NOTES), len(user_list))
    
    for i in range(n):
        ref_freq, ref_dur = REFERENCE_NOTES[i]
        user_freq, user_dur = user_list[i]
        
        freq_diff, dur_diff = abs(ref_freq - user_freq), abs(ref_dur - user_dur)
        total_justesse += freq_diff
        total_tempo += dur_diff
        
        if freq_diff > 3:
            justesse_errors.append((i+1, ref_freq, user_freq))
        if dur_diff > 0.2:
            tempo_errors.append((i+1, ref_dur, user_dur))

    # Calcul des scores
    justesse_score = max(0, 100 - (total_justesse / n))
    tempo_score = max(0, 100 - 5*(total_tempo / n * 10))
    
    # Chemin de sortie du PDF
    output_pdf = f"temp_files/audio/{file_name}.wav.pdf"
    os.makedirs(os.path.dirname(output_pdf), exist_ok=True)
    
    # Création du PDF
    c = canvas.Canvas(output_pdf, pagesize=letter)
    width, height = letter

    c.setFont("Helvetica-Bold", 16)
    c.setFillColor(colors.darkblue)
    c.drawString(100, height - 50, "Rapport d'analyse musicale")
    
    c.setFont("Helvetica", 12)
    c.setFillColor(colors.black)
    c.drawString(100, height - 80, f"Score de justesse : {justesse_score:.2f}/100")
    c.drawString(100, height - 100, f"Score de tempo : {tempo_score:.2f}/100")
    
    # Ajout du graphique
    drawing = Drawing(400, 200)
    chart = LinePlot()
    chart.x = 50
    chart.y = 50
    chart.height = 100
    chart.width = 300
    
    ref_data = [(i, ref[0]) for i, ref in enumerate(REFERENCE_NOTES[:n])]
    user_data = [(i, usr[0]) for i, usr in enumerate(user_list[:n])]
    
    chart.data = [ref_data, user_data]
    chart.lines[0].strokeColor = colors.blue
    chart.lines[1].strokeColor = colors.red
    
    chart.xValueAxis.labels.fontSize = 8
    chart.yValueAxis.labels.fontSize = 8
    
    label = Label()
    label.x = 200
    label.y = 180
    label.setText("Comparaison des fréquences (bleu: attendu, rouge: joué)")
    
    drawing.add(chart)
    drawing.add(label)
    drawing.drawOn(c, 50, height - 300)
    
    # Détails des erreurs
    y_pos = height - 350
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(colors.red)
    c.drawString(100, y_pos, "Erreurs de justesse :")
    c.setFillColor(colors.black)
    y_pos -= 20
    for i, ref, usr in justesse_errors:
        note = NOTE_FREQUENCIES.get(ref, f"{ref} Hz")
        c.drawString(120, y_pos, f"Note {i}: Attendu {note}, Joué {usr:.2f} Hz")
        y_pos -= 20
    
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(colors.red)
    c.drawString(100, y_pos - 20, "Erreurs de tempo :")
    c.setFillColor(colors.black)
    y_pos -= 40
    for i, ref, usr in tempo_errors:
        c.drawString(120, y_pos, f"Note {i}: Attendu {ref}s, Joué {usr}s")
        y_pos -= 20
    
    c.save()
    print(f"Rapport généré : {output_pdf}")
    return output_pdf
