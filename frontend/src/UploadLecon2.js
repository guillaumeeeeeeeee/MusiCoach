import React, { useState } from "react";
import './App.css';
import {Link} from 'react-router-dom';
import HomePage from './Images/home-btn.png';
import Challenges from './Images/Challenge-btn.png';
import Composer from './Images/Composition-btn.png';
import Bibliothèque from './Images/records-btn.png';
import Profil from './Images/profil-btn.png';
import Menu from './Images/Bouton_menu.png';
import Retour from './Images/Retour.png';
import Avignon from './Images/avignon.png';


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

        fetch("http://127.0.0.1:8000/upload-lecon/", {
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

    function ImageBarre({ image, link, NouvellePage}) {
        return (
          <div>
            <Link to={link}>
              <img className='barre-image'
                src={image} 
                alt={NouvellePage} 
                style={{ cursor: 'pointer' }} 
              />
            </Link>
          </div>
        );
      }
      
      function BarreLaterale({ toggleVisibility, isVisible }) {
        return (
          <div className='side-barre'>
            <img
              src={Retour}
              alt="Retour"
              onClick={toggleVisibility}
              className="toggle-button"
            />
            <ImageBarre image={HomePage} link="/PagePrincipale" NouvellePage="PagePrincipale" />
            <ImageBarre image={Challenges} link="https://www.larousse.fr/dictionnaires/francais/challenge/14488" NouvellePage="Challenges" />
            <ImageBarre image={Composer} link="/BoutonLecons" NouvellePage="Composer" />
            <ImageBarre image={Bibliothèque} link="https://www.larousse.fr/dictionnaires/francais/bibliothèque/9064" NouvellePage="Bibliothèque" />
            <ImageBarre image={Profil} link="/PageProfil" NouvellePage="Profil" />
          </div>
        );
      }
      
      function ToggleElement() {
        // État pour contrôler la visibilité
        const [isVisible, setIsVisible] = useState(false);
      
        // Fonction pour basculer la visibilité
        const toggleVisibility = () => {
          setIsVisible(prevState => !prevState);
        };
      
        return (
          <div className="toggle-element">
            {/* Bouton principal */}
            <img
              src={Menu}
              alt="Menu"
              onClick={toggleVisibility}
              className="toggle-button"
            />
      
            {/* Barre latérale conditionnelle */}
            {isVisible && <BarreLaterale isVisible={isVisible} toggleVisibility={toggleVisibility} />}
          </div>
        );
      }   

  function Partition() {
    return (
      <div>
        <img src={Avignon} alt="partition" className='partition' />
      </div>
    );
  }

    return (
        <div className="entire-page">
            <h1 className='titre'>Sur le pont d'Avignon</h1>
            <Partition></Partition>
            <ToggleElement></ToggleElement>
            
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
