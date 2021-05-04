import { useState } from 'react';
import styles from './Person.module.scss';
import { getFilm } from '../api';

export const Person = ({ person }) => {

    const [toggle, setToggle] = useState(false);
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false)

    const handlePersonClick = async () => {

        if (films.length === 0) {
            setLoading(true);
            const filmsArray = [];

            for (const film of person.films) {
                const fetchFilm = await getFilm(film);
                filmsArray.push(fetchFilm);
            }
            setFilms(filmsArray)
            setLoading(false);

        }
        setToggle(!toggle);
    }

    const printMovies = () => films.map((film, index) => <div key={`key_${index}`} className={styles.film}>
        <div><b>Title:</b> {film.title} </div>
        <div><b>Release date:</b> {film.release_date}</div>
        <div><b>Description: </b>{film.opening_crawl.substring(0, 130)}...</div>
    </div>)

    const printMovieOrWarining = () => {
        if (toggle && films.length !== 0) {
            return <><div><b>Films:</b></div>{printMovies()}</>;
        }
        else if (toggle && films.length === 0){
            return <div><b>Films:</b> Warning: not given by api</div>;
        }
    }


    return <div className={styles.personStyles} onClick={() => handlePersonClick()}>
        <div><b>Character name:</b> {person.name}</div>
        <div><b>Homeworld name:</b> {person.homeworldName}</div>
        <div><b>Homeworld population:</b> {person.homeworldPopulation}</div>
        {loading && <div>Loading...</div>}{printMovieOrWarining()}
    </div>
}