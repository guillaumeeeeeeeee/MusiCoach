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
      navigate("/dashboard"); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
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
      <button onClick={handleLogIn}>Se connecter</button>
      <p>
        Pas encore inscrit ? <a href="/signup">Créer un compte</a>
      </p>
    </div>
  );
};

export default PageLogIn;
