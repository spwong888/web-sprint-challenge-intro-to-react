import React from 'react';

function Planets({ planets }) {
  return (
    <div className="planets-list">
      <h2>Planets</h2>
      <ul>
        {planets.map(planet => (
          <li key={planet.id}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Planets;