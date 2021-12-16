import React from 'react';

function Welcome({ name }) {
  return <h1>Hello, {name}</h1>
}

function Composition() {
  return (
    <div>
      <Welcome name="jimmy" />
      <Welcome name="sara" />
      <Welcome name="timmy" />
      <Welcome name="simmy" />
    </div>
  );
}

export default Composition;