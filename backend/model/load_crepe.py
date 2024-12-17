import subprocess

# Commande à exécuter
commande = ["crepe", "/Users/baptisteaudouin/Documents/GitHub/MusiCoach/backend/audios/extrait_dodo.wav", "--step-size", "40"]

# Exécution de la commande
try:
    subprocess.run(commande, check=True)
    print("Commande exécutée avec succès !")
except subprocess.CalledProcessError as e:
    print(f"Erreur lors de l'exécution de la commande : {e}")


