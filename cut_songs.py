from pydub import AudioSegment

def extract_audio_segment(input_file, start_sec, end_sec, output_file):
    # Charger le fichier audio
    audio = AudioSegment.from_file(input_file)
    
    # Calculer les positions en millisecondes
    start_time = start_sec * 1000
    end_time = end_sec * 1000
    
    # Extraire le segment audio
    extracted_segment = audio[start_time:end_time]
    
    # Exporter le segment extrait dans un nouveau fichier
    extracted_segment.export(output_file, format="mp3")
    print(f"Segment audio extrait de {start_sec} à {end_sec} secondes et sauvegardé dans {output_file}")

# Exemple d'utilisation
input_file = "chemin/vers/votre/fichier_audio.mp3"
start_sec = 2
end_sec = 15
output_file = "chemin/vers/votre/fichier_extrait.mp3"

extract_audio_segment(input_file, start_sec, end_sec, output_file)
