import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LobbyPage from './components/LobbyPage';
import MainPage from './components/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LobbyPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
