import React, { useState } from "react";
import axios from "axios";

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    // Gérer la sélection du fichier
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Fonction pour envoyer le fichier à l'API FastAPI
    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Veuillez sélectionner un fichier audio !");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        setIsUploading(true); // Indiquer que l'upload est en cours
        try {
            const response = await axios.post("http://127.0.0.1:8000/upload-audio/", formData, {
                responseType: "blob", // Gérer la réponse binaire (fichier)
            });

            // Créer un lien pour télécharger le fichier reçu
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", selectedFile.name); // Utilise le même nom que l'uploadé
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error("Erreur lors de l'upload :", error);
            alert("Une erreur est survenue lors de l'envoi du fichier.");
        } finally {
            setIsUploading(false); // Terminer l'état d'upload
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Upload d'Audio</h1>
            <input
                type="file"
                accept=".mp3,.wav,.ogg,.m4a"
                onChange={handleFileChange}
                style={{ margin: "20px" }}
            />
            <button
                onClick={handleUpload}
                style={{ padding: "10px 20px", fontSize: "16px" }}
                disabled={isUploading}
            >
                {isUploading ? "Envoi en cours..." : "Envoyer"}
            </button>
        </div>
    );
}

export default App;