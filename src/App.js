
import { useState } from 'react';
import styles from './App.module.scss';
import { getHomeworld, getPeople } from './api';
import {Person} from './components/Person'

function App() {
  const [searchedWord, setSearchedWord] = useState("");
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false)

  const handleSearchChange = (e) => {
    setSearchedWord(e.target.value);
  }

  const handleSumbit = async (event) => {
    setLoading(true);
    event.preventDefault()
    const fetchData = await getPeople(searchedWord)
    const peopleArray = fetchData.results;
    const newPeopleArray = [];
    for (const person of peopleArray) {
      const newPerson = { name: person.name }
      const personPlanetUrl = person.homeworld;
      const homeworld = await getHomeworld(personPlanetUrl);
      newPerson.homeworldName = homeworld.name;
      newPerson.homeworldPopulation = homeworld.population;
      newPerson.films = homeworld.films;
      newPeopleArray.push(newPerson);
    }
    setPeople(newPeopleArray)
    setLoading(false);
  }

  const printResults = () => people.map((person, index) => {

    return <Person person={person}  key={`key_${index}`}/>
  })


  return (
    <div className={styles.search}>
        <div className={styles.title}>Search a character from Star Wars</div>
        <form className="searchForm" onSubmit={handleSumbit}>
          <input value={searchedWord} onChange={handleSearchChange} placeholder="Search for ..."></input>
          <button type="submit" >Go!</button>
        </form>
        <div className={styles.results}>
          {!loading && printResults()}{loading&&<div>Loading...</div>}
        </div>
    </div>
  );
}

export default App;
