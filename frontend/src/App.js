import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PagePrincipale from './PagePrincipale';
import PageProfil from './PageProfil';

function App() {
  return (
    <Router>
      <div>
        {/* Barre de navigation */}
        <nav className="navigation">
          <Link to='/PagePrincipale'>Page Principalel</Link>
          <Link to='/PageProfil'>Profil</Link>
        </nav>

        {/* Configuration des routes */}
        <Routes>
          <Route path='/PagePrincipale'element={<PagePrincipale />} />
          <Route path='/PageProfil' element={<PageProfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;