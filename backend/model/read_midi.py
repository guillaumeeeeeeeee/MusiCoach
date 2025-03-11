from music21 import stream, note, meter, tempo, metadata

# Exemple de liste de notes : chaque note est définie par son nom (et octave facultative)
# 'C4' correspond au Do au centre du piano, 'D#4' est le Ré# à la même octave, 'E4', etc.
liste_notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
# Dictionnaire de fréquences vers les notes
sorted_frequency_table = [
    (32.703, 'Do', 1), (34.648, 'Do#', 1), (36.708, 'Ré', 1), (38.891, 'Ré#', 1),
    (41.203, 'Mi', 1), (43.654, 'Fa', 1), (46.249, 'Fa#', 1), (48.999, 'Sol', 1),
    (51.913, 'Sol#', 1), (55.0, 'La', 1), (58.27, 'Sib', 1), (61.735, 'Si', 1),
    (65.406, 'Do', 2), (69.296, 'Do#', 2), (73.416, 'Ré', 2), (77.782, 'Ré#', 2),
    (82.407, 'Mi', 2), (87.307, 'Fa', 2), (92.499, 'Fa#', 2), (97.999, 'Sol', 2),
    (103.826, 'Sol#', 2), (110.0, 'La', 2), (116.54, 'Sib', 2), (123.471, 'Si', 2),
    (130.813, 'Do', 3), (138.591, 'Do#', 3), (146.832, 'Ré', 3), (155.563, 'Ré#', 3),
    (164.814, 'Mi', 3), (174.614, 'Fa', 3), (184.997, 'Fa#', 3), (195.998, 'Sol', 3),
    (207.652, 'Sol#', 3), (220.0, 'La', 3), (233.082, 'Sib', 3), (246.942, 'Si', 3),
    (261.626, 'Do', 4), (277.183, 'Do#', 4), (293.665, 'Ré', 4), (311.127, 'Ré#', 4),
    (329.628, 'Mi', 4), (349.228, 'Fa', 4), (369.994, 'Fa#', 4), (391.995, 'Sol', 4),
    (415.305, 'Sol#', 4), (440.0, 'La', 4), (466.164, 'Sib', 4), (493.883, 'Si', 4),
    (523.251, 'Do', 5), (554.365, 'Do#', 5), (587.33, 'Ré', 5), (622.254, 'Ré#', 5),
    (659.255, 'Mi', 5), (698.456, 'Fa', 5), (739.989, 'Fa#', 5), (783.991, 'Sol', 5),
    (830.609, 'Sol#', 5), (880.0, 'La', 5), (932.328, 'Sib', 5), (987.767, 'Si', 5),
    (1046.502, 'Do', 6), (1108.731, 'Do#', 6), (1174.659, 'Ré', 6), (1244.508, 'Ré#', 6),
    (1318.51, 'Mi', 6), (1396.913, 'Fa', 6), (1479.978, 'Fa#', 6), (1567.982, 'Sol', 6),
    (1661.219, 'Sol#', 6), (1760.0, 'La', 6), (1864.655, 'Sib', 6), (1975.533, 'Si', 6),
    (2093.005, 'Do', 7), (2217.461, 'Do#', 7), (2349.318, 'Ré', 7), (2489.016, 'Ré#', 7),
    (2637.021, 'Mi', 7), (2793.826, 'Fa', 7), (2959.955, 'Fa#', 7), (3135.964, 'Sol', 7),
    (3322.438, 'Sol#', 7), (3520.0, 'La', 7), (3729.31, 'Sib', 7), (3951.066, 'Si', 7),
    (4186.009, 'Do', 8), (4434.922, 'Do#', 8), (4698.636, 'Ré', 8), (4978.032, 'Ré#', 8),
    (5274.041, 'Mi', 8), (5587.652, 'Fa', 8), (5919.911, 'Fa#', 8), (6271.927, 'Sol', 8),
    (6644.875, 'Sol#', 8), (7040.0, 'La', 8), (7458.62, 'Sib', 8), (7902.133, 'Si', 8),
    (8372.018, 'Do', 9), (8869.844, 'Do#', 9), (9397.273, 'Ré', 9), (9956.064, 'Ré#', 9),
    (10548.082, 'Mi', 9), (11175.303, 'Fa', 9), (11839.822, 'Fa#', 9), (12543.854, 'Sol', 9),
    (13289.75, 'Sol#', 9), (14080.0, 'La', 9), (14917.24, 'Sib', 9), (15804.266, 'Si', 9)
]
sorted_frequency_table = [
    (32.703, 'C', 1), (34.648, 'C#', 1), (36.708, 'D', 1), (38.891, 'D#', 1),
    (41.203, 'E', 1), (43.654, 'F', 1), (46.249, 'F#', 1), (48.999, 'G', 1),
    (51.913, 'G#', 1), (55.0, 'A', 1), (58.27, 'Bb', 1), (61.735, 'B', 1),
    (65.406, 'C', 2), (69.296, 'C#', 2), (73.416, 'D', 2), (77.782, 'D#', 2),
    (82.407, 'E', 2), (87.307, 'F', 2), (92.499, 'F#', 2), (97.999, 'G', 2),
    (103.826, 'G#', 2), (110.0, 'A', 2), (116.54, 'Bb', 2), (123.471, 'B', 2),
    (130.813, 'C', 3), (138.591, 'C#', 3), (146.832, 'D', 3), (155.563, 'D#', 3),
    (164.814, 'E', 3), (174.614, 'F', 3), (184.997, 'F#', 3), (195.998, 'G', 3),
    (207.652, 'G#', 3), (220.0, 'A', 3), (233.082, 'Bb', 3), (246.942, 'B', 3),
    (261.626, 'C', 4), (277.183, 'C#', 4), (293.665, 'D', 4), (311.127, 'D#', 4),
    (329.628, 'E', 4), (349.228, 'F', 4), (369.994, 'F#', 4), (391.995, 'G', 4),
    (415.305, 'G#', 4), (440.0, 'A', 4), (466.164, 'Bb', 4), (493.883, 'B', 4),
    (523.251, 'C', 5), (554.365, 'C#', 5), (587.33, 'D', 5), (622.254, 'D#', 5),
    (659.255, 'E', 5), (698.456, 'F', 5), (739.989, 'F#', 5), (783.991, 'G', 5),
    (830.609, 'G#', 5), (880.0, 'A', 5), (932.328, 'Bb', 5), (987.767, 'B', 5),
    (1046.502, 'C', 6), (1108.731, 'C#', 6), (1174.659, 'D', 6), (1244.508, 'D#', 6),
    (1318.51, 'E', 6), (1396.913, 'F', 6), (1479.978, 'F#', 6), (1567.982, 'G', 6),
    (1661.219, 'G#', 6), (1760.0, 'A', 6), (1864.655, 'Bb', 6), (1975.533, 'B', 6),
    (2093.005, 'C', 7), (2217.461, 'C#', 7), (2349.318, 'D', 7), (2489.016, 'D#', 7),
    (2637.021, 'E', 7), (2793.826, 'F', 7), (2959.955, 'F#', 7), (3135.964, 'G', 7),
    (3322.438, 'G#', 7), (3520.0, 'A', 7), (3729.31, 'Bb', 7), (3951.066, 'B', 7),
    (4186.009, 'C', 8), (4434.922, 'C#', 8), (4698.636, 'D', 8), (4978.032, 'D#', 8),
    (5274.041, 'E', 8), (5587.652, 'F', 8), (5919.911, 'F#', 8), (6271.927, 'G', 8),
    (6644.875, 'G#', 8), (7040.0, 'A', 8), (7458.62, 'Bb', 8), (7902.133, 'B', 8),
    (8372.018, 'C', 9), (8869.844, 'C#', 9), (9397.273, 'D', 9), (9956.064, 'D#', 9),
    (10548.082, 'E', 9), (11175.303, 'F', 9), (11839.822, 'F#', 9), (12543.854, 'G', 9),
    (13289.75, 'G#', 9), (14080.0, 'A', 9), (14917.24, 'Bb', 9), (15804.266, 'B', 9)
]


# Fonction pour associer une fréquence à la note correspondante
def get_note_for_frequency(frequency):
    for freq, note, octave in sorted_frequency_table:
        if abs(frequency - freq) < 0.5:  # tolérance de 0.5 Hz pour correspondre aux fréquences
            return note + str(octave)
    return None  # Si aucune correspondance n'est trouvée

# Exemple de fonction qui prend une liste de (fréquence, durée) et renvoie la partition
def generate_partition_from_frequencies(frequencies_with_durations):
    partition = []
    for frequency, duration in frequencies_with_durations:
        note_name = get_note_for_frequency(frequency)
        if note_name:
            partition.append((note_name, duration))
    return partition


def midi_generate(frequencies_with_durations, file_name) :
    # Générer la partition
    notes_matches = generate_partition_from_frequencies(frequencies_with_durations)



    # Création de la partition
    partition = stream.Stream()

    # Ajouter un tempo (par exemple, 120 battements par minute)
    partition.append(tempo.MetronomeMark(number=100))

    # Ajouter une mesure (par exemple, en 4/4)
    partition.append(meter.TimeSignature('4/4'))

    # Ajouter les notes à la partition
    for notes,temps in notes_matches:
        nouvelle_note = note.Note(notes)  # Créer une note
        nouvelle_note.quarterLength = temps  # Durée de la note (1 correspond à une noire)
        partition.append(nouvelle_note)

    partition.metadata = metadata.Metadata()
    formatted_title = file_name.replace("_", " ").title()
    partition.metadata.title = formatted_title
    partition.metadata.composer = "MusiCoach"

    # Afficher la partition (dans un logiciel compatible)
    #partition.show()

    # Exporter en fichier MIDI
    partition.write('midi', fp='partition.mid')

    # Exporter en fichier MusicXML (pour afficher avec MuseScore, par exemple)
    #partition.write('musicxml', fp='partition.xml')
    
