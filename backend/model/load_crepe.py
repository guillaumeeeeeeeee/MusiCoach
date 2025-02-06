import subprocess

def function_load_crepe(wave_file):
    commande = ["crepe", wave_file, "--step-size", "20"]

    try:
        subprocess.run(commande, check=True)
        print("Commande exécutée avec succès !")
    except subprocess.CalledProcessError as e:
        print(f"Erreur lors de l'exécution de la commande : {e}")


