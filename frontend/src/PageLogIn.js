// /src/pages/LogIn.js
import React, { useState } from "react";
import { logIn } from "./authService";
import { useNavigate } from "react-router-dom";

const PageLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      await logIn(email, password);
      alert("Connexion réussie !");
      // Rediriger vers une autre page (par exemple, tableau de bord)
      navigate("/PagePrincipale"); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='container-connexion'>
      <h2 className='titre'>Connexion</h2>
      <div className="barre">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="barre">
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="connexion-btn" onClick={handleLogIn}>Se connecter</button>
      <p>
        Pas encore inscrit ? <a href="/PageSignUp">Créer un compte</a>
      </p>
    </div>
  );
};

export default PageLogIn;
