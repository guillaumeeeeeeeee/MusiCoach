def compare_notes(list_a, list_b, tolerance=0.10):
    if len(list_a) != len(list_b):
        raise ValueError("Les deux listes doivent avoir la même longueur.")

    total_notes = len(list_a)
    correct_frequencies = 0
    correct_durations = 0

    for (freq_a, dur_a), (freq_b, dur_b) in zip(list_a, list_b):
        # Comparaison avec tolérance pour les fréquences
        if abs(freq_a - freq_b) / freq_a <= tolerance:
            correct_frequencies += 1
        # Comparaison stricte pour les durées
        if dur_a == dur_b:
            correct_durations += 1

    precision_frequencies = (correct_frequencies / total_notes) * 100
    precision_durations = (correct_durations / total_notes) * 100
    precision_global = ((precision_frequencies + precision_durations) / 2)

    return {
        "precision_frequencies": precision_frequencies,
        "precision_durations": precision_durations,
        "precision_global": precision_global
    }

# Exemple d'utilisation avec des erreurs
list_a = [(329.628, 2), (261.626, 2), (329.628, 1), (329.628, 1), (261.626, 2), (293.665, 1), (329.628, 1), (349.228, 1), (329.628, 1), (293.665, 1), (391.995, 1), (329.628, 2), (261.626, 2), (329.628, 2), (261.626, 2), (329.628, 1), (329.628, 1), (261.626, 2), (293.665, 1), (329.628, 1), (349.228, 1), (329.628, 1), (293.665, 1), (391.995, 1), (261.626, 4)]
list_b = [(329.628, 2), (261.626, 2), (329.628, 1), (329.628, 1), (261.626, 3), (293.665, 1), (329.628, 1), (349.228, 1), (329.628, 1), (293.665, 1), (391.995, 1), (329.628, 2), (261.626, 2), (329.628, 2), (261.626, 2), (329.628, 1), (329.628, 1), (261.626, 2), (293.665, 1), (329.628, 1), (349.228, 1), (329.628, 1), (293.665, 1), (391.995, 1), (261.626, 3)]

result = compare_notes(list_a, list_b)
print(f"Précision des fréquences: {result['precision_frequencies']}%")
print(f"Précision des durées: {result['precision_durations']}%")
print(f"Précision globale: {result['precision_global']}%")