import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/dynamic-routing/Detail';
import List from './components/dynamic-routing/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<List />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
