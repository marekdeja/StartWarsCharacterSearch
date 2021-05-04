import axios from "axios";
const apiUrl = "https://swapi.dev/api";

const httpsUrl = (url) => url.replace("http", "https");

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
        .get(`${httpsUrl(url)}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });

export const getFilm = (url) => {
    ;
    return axios
        .get(`${httpsUrl(url)}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

