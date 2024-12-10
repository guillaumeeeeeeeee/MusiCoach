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
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>S'inscrire</button>
      <p>
        Déjà inscrit ? <a href="/">Se connecter</a>
      </p>
    </div>
  );
};

export default PageSignUp;
