import React, { useState } from 'react';

function Character({ character }) {
  const [showPlanet, setShowPlanet] = useState(false);

  const togglePlanet = () => {
    setShowPlanet(!showPlanet);
  };

  return (
    <div className="character-card" onClick={togglePlanet}>
      <h2 className="character-name">{character.name}</h2>
      <p className="character-id">ID: {character.id}</p>
      <p className="character-dob">Date of Birth: {character.birth_year}</p>
      {showPlanet && (
        <p className="character-planet">Home World: {character.homeworld.name}</p>
      )}
    </div>
  );
}

export default Character;
