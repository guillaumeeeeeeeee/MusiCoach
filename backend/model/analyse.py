import pandas as pd
import os
import bisect

def load_analyse(file_name) :
  chemin_csv = os.path.abspath(os.path.join(os.path.dirname(__file__), f"../audio/{file_name}.f0.csv"))
  data = pd.read_csv(chemin_csv)

t = data['time']
freq, conf = data['frequency'], data['confidence']

  # Correction de la table des fréquences, notes et octaves
  sorted_frequency_table = [(32.703, 'Do', 1),
  (34.648, 'Do#', 1),
  (36.708, 'Ré', 1),
  (38.891, 'Ré#', 1),
  (41.203, 'Mi', 1),
  (43.654, 'Fa', 1),
  (46.249, 'Fa#', 1),
  (48.999, 'Sol', 1),
  (51.913, 'Sol#', 1),
  (55.0, 'La', 1),
  (58.27, 'Sib', 1),
  (61.735, 'Si', 1),
  (65.406, 'Do', 2),
  (69.296, 'Do#', 2),
  (73.416, 'Ré', 2),
  (77.782, 'Ré#', 2),
  (82.407, 'Mi', 2),
  (87.307, 'Fa', 2),
  (92.499, 'Fa#', 2),
  (97.999, 'Sol', 2),
  (103.826, 'Sol#', 2),
  (110.0, 'La', 2),
  (116.54, 'Sib', 2),
  (123.471, 'Si', 2),
  (130.813, 'Do', 3),
  (138.591, 'Do#', 3),
  (146.832, 'Ré', 3),
  (155.563, 'Ré#', 3),
  (164.814, 'Mi', 3),
  (174.614, 'Fa', 3),
  (184.997, 'Fa#', 3),
  (195.998, 'Sol', 3),
  (207.652, 'Sol#', 3),
  (220.0, 'La', 3),
  (233.082, 'Sib', 3),
  (246.942, 'Si', 3),
  (261.626, 'Do', 4),
  (277.183, 'Do#', 4),
  (293.665, 'Ré', 4),
  (311.127, 'Ré#', 4),
  (329.628, 'Mi', 4),
  (349.228, 'Fa', 4),
  (369.994, 'Fa#', 4),
  (391.995, 'Sol', 4),
  (415.305, 'Sol#', 4),
  (440.0, 'La', 4),
  (466.164, 'Sib', 4),
  (493.883, 'Si', 4),
  (523.251, 'Do', 5),
  (554.365, 'Do#', 5),
  (587.33, 'Ré', 5),
  (622.254, 'Ré#', 5),
  (659.255, 'Mi', 5),
  (698.456, 'Fa', 5),
  (739.989, 'Fa#', 5),
  (783.991, 'Sol', 5),
  (830.609, 'Sol#', 5),
  (880.0, 'La', 5),
  (932.328, 'Sib', 5),
  (987.767, 'Si', 5),
  (1046.502, 'Do', 6),
  (1108.731, 'Do#', 6),
  (1174.659, 'Ré', 6),
  (1244.508, 'Ré#', 6),
  (1318.51, 'Mi', 6),
  (1396.913, 'Fa', 6),
  (1479.978, 'Fa#', 6),
  (1567.982, 'Sol', 6),
  (1661.219, 'Sol#', 6),
  (1760.0, 'La', 6),
  (1864.655, 'Sib', 6),
  (1975.533, 'Si', 6),
  (2093.005, 'Do', 7),
  (2217.461, 'Do#', 7),
  (2349.318, 'Ré', 7),
  (2489.016, 'Ré#', 7),
  (2637.021, 'Mi', 7),
  (2793.826, 'Fa', 7),
  (2959.955, 'Fa#', 7),
  (3135.964, 'Sol', 7),
  (3322.438, 'Sol#', 7),
  (3520.0, 'La', 7),
  (3729.31, 'Sib', 7),
  (3951.066, 'Si', 7),
  (4186.009, 'Do', 8),
  (4434.922, 'Do#', 8),
  (4698.636, 'Ré', 8),
  (4978.032, 'Ré#', 8),
  (5274.041, 'Mi', 8),
  (5587.652, 'Fa', 8),
  (5919.911, 'Fa#', 8),
  (6271.927, 'Sol', 8),
  (6644.875, 'Sol#', 8),
  (7040.0, 'La', 8),
  (7458.62, 'Sib', 8),
  (7902.133, 'Si', 8),
  (8372.018, 'Do', 9),
  (8869.844, 'Do#', 9),
  (9397.273, 'Ré', 9),
  (9956.064, 'Ré#', 9),
  (10548.082, 'Mi', 9),
  (11175.303, 'Fa', 9),
  (11839.822, 'Fa#', 9),
  (12543.854, 'Sol', 9),
  (13289.75, 'Sol#', 9),
  (14080.0, 'La', 9),
  (14917.24, 'Sib', 9),
  (15804.266, 'Si', 9)]


  def extrait_freq(freq, t) :
    freq_notes= [(freq[0],t[0])]
    seuil = 5
    for i in range(1,len(freq)):
      if abs(freq[i] - freq[i-1]) > seuil:
        freq_notes.append((freq[i],t[i]))
    return freq_notes

  notes_freq = extrait_freq(freq, t)
  frequency_dict = {freq: (note, octave) for freq, note, octave in sorted_frequency_table}
  freqs_notes_match = [sorted_frequency_table[i][0] for i in range(len(sorted_frequency_table))]



  def find_closest_value(sorted_list, value):
      # Trouver la position d'insertion de la valeur
      pos = bisect.bisect_left(sorted_list, value)

      # Si la position est 0, la valeur la plus proche est le premier élément
      if pos == 0:
          return sorted_list[0]

      # Si la position est égale à la longueur de la liste, la valeur la plus proche est le dernier élément
      if pos == len(sorted_list):
          return sorted_list[-1]

      # Comparer la valeur avant et après la position trouvée pour déterminer la plus proche
      before = sorted_list[pos - 1]
      after = sorted_list[pos]

      if abs(before - value) <= abs(after - value):
          return before
      else:
          return after

  # Liste uniquement des fréquences
  freqs_only = [item[0] for item in sorted_frequency_table]

  # Liste des fréquences les plus proches
  list_closest_value = [find_closest_value(freqs_only, v) for v in [notes_freq[k][0] for k in range(len(notes_freq))]]

  #chutes de confiances
  temps = [0.00]
  chute_confiance = 0.7
  for i in range(len(t)) :
    if conf[i] < chute_confiance :
      temps.append(t[i])


  tps_freq = []
  for i in range(len(temps)-1) :
    tps_freq.append(abs(find_closest_value(t, (temps[i] + (temps[i+1]-temps[i])/2))))

  temps_frequence = dict(zip(data['time'], data['frequency']))


  frequences = [temps_frequence[t] for t in tps_freq if t in temps_frequence]
  frequences_closet = [find_closest_value(freqs_notes_match, f) for f in frequences]
  mapped_notes = [frequency_dict[freq] for freq in frequences_closet]
  interval = [round(temps[i+1]-temps[i]) for i in range(len(temps)-1)]


  partition_notes = [(frequences_closet[i], interval[i]) for i in range(len(mapped_notes))]
  
  return partition_notes