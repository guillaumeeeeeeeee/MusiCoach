import load_crepe
import read_midi
import analyse

file_name =  "extrait_dodo"

load_crepe.function_load_crepe(f"/Users/baptisteaudouin/Documents/GitHub/MusiCoach/backend/audios/{file_name}.wav")

read_midi.midi_generate(analyse.load_analyse(file_name))