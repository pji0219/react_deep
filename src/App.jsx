import React from 'react';
import Composition from './components/2-4.Props/Composition';
import Extraction from './components/2-4.Props/extraction/Extraction';
import ClassComponent from './components/2-5.State/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';

function App() {
  return (
    <div>
      <FunctionalComponent />
      <ClassComponent />
      <Extraction />
      <Composition />
    </div>
  );
}

export default App;
