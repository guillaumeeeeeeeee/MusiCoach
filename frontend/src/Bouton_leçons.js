import React, { useState } from "react";
import './AppBis.css';

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    // Handle file selection
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Function to upload the file using fetch
    const handleUpload = () => {
        if (!selectedFile) {
            alert("Veuillez sélectionner un fichier audio !");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        setIsUploading(true); // Indicate upload is in progress

        fetch("http://127.0.0.1:8000/upload-audio/", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Upload failed");
                }
                return response.blob(); // Receive binary response (file)
            })
            .then((blob) => {
                // Create a link to download the received file
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "resultat.pdf"); // Use the same name as uploaded
                document.body.appendChild(link);
                link.click();
                link.remove();
            })
            .catch((error) => {
                console.error("Erreur lors de l'upload :", error);
                alert(`Une erreur est survenue : ${error.message}`);
            })
            .finally(() => {
                setIsUploading(false); // Upload state ends
            });
    };

    return (
        <div className="entire-page">
            <h1 className='titre'>Générateur Partition</h1>
            
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
