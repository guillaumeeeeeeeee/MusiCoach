import load_crepe
import read_midi
import analyse
import os

file_name =  "extrait_dodo_test_front"


chemin_extrait = os.path.abspath(os.path.join(os.path.dirname(__file__), f"../audio/{file_name}.wav"))

load_crepe.function_load_crepe(chemin_extrait)

#read_midi.midi_generate(analyse.load_analyse(file_name))
