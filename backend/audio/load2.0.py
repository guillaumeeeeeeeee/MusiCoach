from pydub import AudioSegment

# Chargement du fichier audio
input_file = "/Users/baptisteaudouin/Documents/GitHub/MusiCoach/backend/audios/comptines.wav"
audio_clip = AudioSegment.from_wav(input_file)

# Découpage des extraits
extraits = {
    "intro": (1, 7),           # en secondes
    "dodo": (7, 43),
    "avignon": (44, 67),
    "frere_jacques": (68, 113),
    "claire_lune": (114, 156),
    "crocodiles": (157, 193)
}

# Fonction pour sauvegarder un extrait audio
def save_audio(audio_clip, start, end, name):
    output_file = f"extrait_{name}.wav"
    print(f"Enregistrement : {output_file}")
    extrait = audio_clip[start * 1000:end * 1000]  # Pydub utilise des millisecondes
    extrait.export(output_file, format="wav")

# Boucle pour sauvegarder chaque extrait
for name, (start, end) in extraits.items():
    save_audio(audio_clip, start, end, name)
