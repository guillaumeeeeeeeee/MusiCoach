import load_crepe as load_crepe
import read_midi as read_midi
import analyse as analyse
import convert.mid_pdf as mid_pdf
import os

file_name = "extrait_avignon"

chemin_extrait = os.path.abspath(os.path.join(os.path.dirname(__file__), f"../audio/{file_name}.wav"))

load_crepe.function_load_crepe(chemin_extrait)

a = analyse.load_analyse(file_name)
print(a)

read_midi.midi_generate(a)
    
midi_file = os.path.abspath(os.path.join(os.path.dirname(__file__),"/partition.mid"))
output_pdf = os.path.abspath(os.path.join(os.path.dirname(__file__),f"receive_files/pdf/{file_name}.pdf"))
    
mid_pdf.midi_to_pdf(midi_file, output_pdf)

