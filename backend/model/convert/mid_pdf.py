from music21 import converter, instrument, midi, stream

def midi_to_pdf(midi_file, output_pdf):
    # Charger le fichier MIDI
    try:
        midi_stream = converter.parse(midi_file)
    except Exception as e:
        print(f"Erreur lors du chargement du fichier MIDI : {e}")
        return
    
    # Ajouter des instruments si nécessaire
    for part in midi_stream.parts:
        instr = instrument.fromString('Piano')  # Exemple : Piano par défaut
        part.insert(0, instr)
    
    # Afficher la partition
    print("Partition générée avec succès.")

    # Exporter en PDF
    try:
        midi_stream.write('musicxml.pdf', output_pdf)
        print(f"Partition enregistrée sous : {output_pdf}")
    except Exception as e:
        print(f"Erreur lors de l'enregistrement en PDF : {e}")

# Exemple d'utilisation
midi_file = "/Users/baptisteaudouin/Documents/GitHub/MusiCoach/partition.mid"
output_pdf = "temp_files/pdf/extrait_dodo_test_front.wav.pdf"
midi_to_pdf(midi_file, output_pdf)
