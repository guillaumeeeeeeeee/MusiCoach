import backend.model.load_crepe as load_crepe
import backend.model.read_midi as read_midi
import backend.model.analyse as analyse
import backend.model.convert.mid_pdf as mid_pdf
import os

def finish(file_name):

    chemin_extrait = os.path.abspath(os.path.join(os.path.dirname(__file__), f"../../temp_files/audio/{file_name}.wav"))

    load_crepe.function_load_crepe(chemin_extrait)

    read_midi.midi_generate(analyse.load_analyse(file_name))
    
    midi_file = os.path.abspath(os.path.join(os.path.dirname(__file__),"../../partition.mid"))
    output_pdf = f"temp_files/audio/{file_name}.wav.pdf"
    
    mid_pdf.midi_to_pdf(midi_file, output_pdf)
