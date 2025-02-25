import backend.model.load_crepe as load_crepe
import backend.model.read_midi as read_midi
import backend.model.analyse as analyse
import backend.model.convert.mid_pdf as mid_pdf
import backend.model.score as score
import os

def finish(file_name):

    chemin_extrait = os.path.abspath(os.path.join(os.path.dirname(__file__), f"../../temp_files/audio/{file_name}.wav"))

    load_crepe.function_load_crepe(chemin_extrait, file_name)

    read_midi.midi_generate(analyse.load_analyse(file_name), file_name)
    
    midi_file = os.path.abspath(os.path.join(os.path.dirname(__file__),"../../partition.mid"))
    output_pdf = f"temp_files/audio/{file_name}.pdf"
    
    mid_pdf.midi_to_pdf(midi_file, output_pdf, file_name)


def scoring(file_name):
    chemin_extrait = os.path.abspath(os.path.join(os.path.dirname(__file__), f"../../temp_files/audio/{file_name}.wav"))

    load_crepe.function_load_crepe(chemin_extrait)

    user_list = analyse.load_analyse(file_name)
    
    score.generate_analysis_pdf(user_list, file_name)
    
    
    