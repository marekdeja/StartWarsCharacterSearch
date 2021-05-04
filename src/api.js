import axios from "axios";
const apiUrl = "https://swapi.dev/api";

export const getPeople = (name) =>
    axios
        .get(`${apiUrl}/people/?search=${name}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });

        export const getHomeworld = (url) =>
    axios
        .get(`${url}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });

        export const getFilm = (url) =>
    axios
        .get(`${url}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
        