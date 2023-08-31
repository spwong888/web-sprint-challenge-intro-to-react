import React, { useState } from 'react';

function Character({ character, homeWorld }) {
  const [showHomeWorld, setShowHomeWorld] = useState(false);

  const toggleHomeWorld = () => {
    setShowHomeWorld(prevState => !prevState);

  };

  return (
    <div className="character-card" onClick={toggleHomeWorld}>
      <h2>{character.name}</h2>
      <p>ID: {character.id}</p>
      <p>Birth Year: {character.birth_year}</p>
      <button>Expand</button>
      {showHomeWorld && (
        <p className="home-world">Home World: {homeWorld.name}</p>
      )}
    </div>
  );
}

export default Character;
