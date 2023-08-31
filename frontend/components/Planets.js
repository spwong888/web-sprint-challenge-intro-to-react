import React from 'react';

function Planets({ planets }) {
  return (
    <div className="planets-list">
      <h2>Planets</h2>
      <ul>
        {planets.map(planet => (
          <li key={planet.id}>
            <strong>Name:</strong> {planet.name} <br />
            <strong>Climate:</strong> {planet.climate} <br />
            <strong>Population:</strong> {planet.population}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Planets;