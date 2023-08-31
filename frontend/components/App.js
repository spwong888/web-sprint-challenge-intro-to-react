import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';
import Planets from './Planets';

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [charactersResponse, planetsResponse] = await Promise.all([
          axios.get('http://localhost:9009/api/people'),
          axios.get('http://localhost:9009/api/planets')
        ]);

        setCharacters(charactersResponse.data);
        setPlanets(planetsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(
    );
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      {loading ? (
        <p>Loading Characters...</p>
      ) : (
        <div className="character-list">
          {characters.map(character => (
            <Character
              key={character.id}
              character={character}
              planets={planets}
            />
          ))}
        </div>
      )}
      <Planets planets={planets} />
    </div>
  );
}


export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
