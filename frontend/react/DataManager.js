// /src/components/DataManager.js
import React, { useState } from "react";
import { addData, getData } from "../services/databaseService";

const DataManager = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAddData = async () => {
    try {
      await addData("items", { name: newItem });
      alert("Donnée ajoutée !");
      setNewItem(""); // Réinitialiser le champ
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGetData = async () => {
    try {
      const data = await getData("items");
      setItems(data); // Mettre à jour les éléments
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Gestion des données</h2>
      <input
        type="text"
        placeholder="Ajouter un élément"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddData}>Ajouter</button>
      <button onClick={handleGetData}>Afficher les données</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataManager;
