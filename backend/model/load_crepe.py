import subprocess

def function_load_crepe(wave_file, file_name):
    step_size_list = ["40", "20"]
    files_name_list = ["extrait_dodo", "extrait_avignon"]
    for i in range(len(files_name_list)):
     if file_name == files_name_list[i]:
        step_size = step_size_list[i]
    commande = ["crepe", wave_file, "--step-size", step_size]

    try:
        subprocess.run(commande, check=True)
        print("Commande exécutée avec succès !")
    except subprocess.CalledProcessError as e:
        print(f"Erreur lors de l'exécution de la commande : {e}")


