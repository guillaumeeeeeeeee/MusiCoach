import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PagePrincipale from './PagePrincipale';
import PageProfil from './PageProfil';
import PageSignUp from "./PageSignUp";
import PageLogIn from "./PageLogIn";
import PageAccueil from './PageAccueil';
import BoutonLecons from './BoutonLecons';
import UploadLecon from './UploadLecon' ;
import UploadLecon2 from './UploadLecon2' ;
import UploadLecon3 from './UploadLecon3' ;


function App() {
  return (
    <Router>
      <div>
        {/* Barre de navigation */}
        <nav className="navigation">
          <Link to='/PagePrincipale'> Page Principalel</Link>
          <Link to='/PageProfil'> Profil</Link>
          <Link to='/PageLogIn'> LogIn</Link>
          <Link to='/PageSignUp'> SignUp</Link>
          <Link to='/'>Page Accueil</Link>
          <Link to='/BoutonLecons'>BoutonLecons</Link>
          <Link to='/UploadLecon'>UploadLecon</Link>
          <Link to='/UploadLecon2'>UploadLecon2</Link>
          <Link to='/UploadLecon3'>UploadLecon3</Link>
        </nav>

        {/* Configuration des routes */}
        <Routes>
          <Route path='/'element={<PageAccueil />} />
          <Route path='/PagePrincipale'element={<PagePrincipale />} />
          <Route path='/PageProfil' element={<PageProfil />} />
          <Route path='/PageLogIn' element={<PageLogIn />} />
          <Route path='/PageSignUp' element={<PageSignUp />} />
          <Route path='/BoutonLecons' element={<BoutonLecons />} />
          <Route path='/UploadLecon' element={<UploadLecon />} />
          <Route path='/UploadLecon2' element={<UploadLecon2 />} />
          <Route path='/UploadLecon3' element={<UploadLecon3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;