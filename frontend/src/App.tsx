import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNav from './components/layout/BottomNav';
import LessonLayout from './components/lessons/LessonLayout';
import TranscribePage from './pages/TranscribePage';
import ChallengePage from './pages/ChallengePage';
import RankingPage from './pages/RankingPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LessonLayout />} />
        <Route path="/transcribe" element={<TranscribePage />} />
        <Route path="/challenges" element={<ChallengePage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
