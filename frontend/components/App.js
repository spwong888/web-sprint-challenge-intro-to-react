import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9009/api/people')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });

    axios.get('http://localhost:9009/api/planets')
      .then(response => {
        setPlanets(response.data);
      })
      .catch(error => {
        console.error('Error fetching planets:', error);
      });
  }, []);

  const combinedData = characters.map(character => {
    const homeworld = planets.find(planet => planet.id === character.homeworld);
    return {
      ...character,
      homeworld,
    };
  });

  return (
    <div className="App">
      {combinedData.map(character => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
