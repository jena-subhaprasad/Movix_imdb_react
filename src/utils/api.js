import axios from "axios";
const BASE_URl = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODc2NTQwMGQxYTFkNGZlZDdkYmVlN2JhNjA2ZDhkMyIsInN1YiI6IjYyNDAwODI0MzczYWMyMDA4OTA3MDY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FebdYaWfTiAqU4us1R4vA2WWyzCpfDAjXgnVeYOig4Q";
//const TMDB_TOKEN=import.mata.env.VITE_APP_TMDB_TOKEN;
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {

    try {
        const { data } = await axios.get(BASE_URl + url, {
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}
