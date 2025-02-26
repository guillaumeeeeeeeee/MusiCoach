import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.graphics.shapes import Drawing
from reportlab.graphics.charts.lineplots import LinePlot
from reportlab.graphics.widgets.markers import makeMarker
from reportlab.graphics.charts.textlabels import Label

def generate_analysis_pdf(user_list, file_name):
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
        
        ref_note = NOTE_FREQUENCIES.get(ref_freq, f"{ref_freq} Hz")
        user_note = NOTE_FREQUENCIES.get(user_freq, f"{user_freq:.2f} Hz")
        
        freq_diff, dur_diff = abs(ref_freq - user_freq), abs(ref_dur - user_dur)
        total_justesse += freq_diff
        total_tempo += dur_diff
        
        if ref_note != user_note:
            justesse_errors.append((i+1, ref_note, user_note))
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
        c.drawString(120, y_pos, f"Note {i}: Attendu {ref}, Joué {usr}")
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

    
    
def generate_analysis_pdf_2(user_list, file_name):
    """Analyse les erreurs, génère un score et crée un PDF avec un graphique."""
    
    # Référence des notes attendues
    REFERENCE_NOTES = [(261.626, 0.5), (261.626, 0.5), (261.626, 1.0), (293.665, 0.5), (293.665, 0.5), (293.665, 1.0), (329.628, 0.5), (349.228, 0.5), (391.995, 0.5), (261.626, 0.5), (246.942, 0.5), (261.626, 0.5), (293.665, 0.5), (195.998, 0.5), (261.626, 0.5), (261.626, 0.5), (261.626, 1.0), (293.665, 0.5), (293.665, 0.5), (293.665, 1.0), (329.628, 0.5), (349.228, 0.5), (391.995, 0.5), (261.626, 0.5), (293.665, 0.5), (246.942, 0.5), (261.626, 3.0)]

    NOTE_FREQUENCIES = {
    32.703: "DO", 34.648: "DO#", 36.708: "RÉ", 38.891: "RÉ#", 41.203: "MI",
    43.654: "FA", 46.249: "FA#", 48.999: "SOL", 51.913: "SOL#", 55.000: "LA",
    58.270: "SIb", 61.735: "SI", 65.406: "DO", 69.296: "DO#", 73.416: "RÉ",
    77.782: "RÉ#", 82.407: "MI", 87.307: "FA", 92.499: "FA#", 97.999: "SOL",
    103.826: "SOL#", 110.000: "LA", 116.540: "SIb", 123.471: "SI", 130.813: "DO",
    138.591: "DO#", 146.832: "RÉ", 155.563: "RÉ#", 164.814: "MI", 174.614: "FA",
    184.997: "FA#", 195.998: "SOL", 207.652: "SOL#", 220.000: "LA", 233.082: "SIb",
    246.942: "SI", 261.626: "DO", 277.183: "DO#", 293.665: "RÉ", 311.127: "RÉ#",
    329.628: "MI", 349.228: "FA", 369.994: "FA#", 391.995: "SOL", 415.305: "SOL#",
    440.000: "LA", 466.164: "SIb", 493.883: "SI", 523.251: "DO", 554.365: "DO#",
    587.330: "RÉ", 622.254: "RÉ#", 659.255: "MI", 698.456: "FA", 739.989: "FA#",
    783.991: "SOL", 830.609: "SOL#", 880.000: "LA", 932.328: "SIb", 987.767: "SI",
    1046.502: "DO", 1108.731: "DO#", 1174.659: "RÉ", 1244.508: "RÉ#", 1318.510: "MI",
    1396.913: "FA", 1479.978: "FA#", 1567.982: "SOL", 1661.219: "SOL#", 1760.000: "LA",
    1864.655: "SIb", 1975.533: "SI", 2093.005: "DO", 2217.461: "DO#", 2349.318: "RÉ",
    2489.016: "RÉ#", 2637.021: "MI", 2793.826: "FA", 2959.955: "FA#", 3135.964: "SOL",
    3322.438: "SOL#", 3520.000: "LA", 3729.310: "SIb", 3951.066: "SI", 4186.009: "DO",
    4434.922: "DO#", 4698.636: "RÉ", 4978.032: "RÉ#", 5274.041: "MI", 5587.652: "FA",
    5919.911: "FA#", 6271.927: "SOL", 6644.875: "SOL#", 7040.000: "LA", 7458.620: "SIb",
    7902.133: "SI", 8372.018: "DO", 8869.844: "DO#", 9397.273: "RÉ", 9956.064: "RÉ#",
    10548.082: "MI", 11175.303: "FA", 11839.822: "FA#", 12543.854: "SOL", 13289.750: "SOL#",
    14080.000: "LA", 14917.240: "SIb", 15804.266: "SI"
}


    
    # Comparaison des notes
    justesse_errors, tempo_errors = [], []
    total_justesse, total_tempo = 0, 0
    n = min(len(REFERENCE_NOTES), len(user_list))
    
    for i in range(n):
        ref_freq, ref_dur = REFERENCE_NOTES[i]
        user_freq, user_dur = user_list[i]
        
        ref_note = NOTE_FREQUENCIES.get(ref_freq, f"{ref_freq} Hz")
        user_note = NOTE_FREQUENCIES.get(user_freq, f"{user_freq:.2f} Hz")
        
        freq_diff, dur_diff = abs(ref_freq - user_freq), abs(ref_dur - user_dur)
        total_justesse += freq_diff
        total_tempo += dur_diff
        
        if ref_note != user_note:
            justesse_errors.append((i+1, ref_note, user_note))
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
        c.drawString(120, y_pos, f"Note {i}: Attendu {ref}, Joué {usr}")
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