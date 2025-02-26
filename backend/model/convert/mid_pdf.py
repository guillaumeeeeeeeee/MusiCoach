from music21 import converter, instrument, midi, stream, metadata

def midi_to_pdf(midi_file, output_pdf, file_name):
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

    midi_stream.metadata = metadata.Metadata()
    midi_stream.metadata.title = file_name.replace('_', ' ').title()  # Transforme le nom de fichier en titre (ex: "extrait_dodo" -> "Extrait Dodo")
    midi_stream.metadata.composer = "MusiCoach"

    # Afficher la partition
    print("Partition générée avec succès.")

    # Exporter en PDF
    try:
        midi_stream.write('musicxml.pdf', output_pdf)
        print(f"Partition enregistrée sous : {output_pdf}")
    except Exception as e:
        print(f"Erreur lors de l'enregistrement en PDF : {e}")


