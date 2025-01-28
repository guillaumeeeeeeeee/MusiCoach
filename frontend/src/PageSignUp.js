// /src/pages/SignUp.js
import React, { useState } from "react";
import { signUp } from "./authService";
import { useNavigate } from "react-router-dom";

const PageSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      alert("Inscription réussie !");
      // Rediriger vers la page de connexion après l'inscription
      navigate("/PageLogIn");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='container-inscription'>
    <h2 className='titre'>Inscription</h2>
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
    <button className="inscription-btn" onClick={handleSignUp}>S'inscrire</button>
    <p>
      Déjà inscrit ? <a href="/PageLogIn">Se connecter</a>
    </p>
  </div>
  );
};

export default PageSignUp;
