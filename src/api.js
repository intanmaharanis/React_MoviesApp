import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMoviePopular = async() => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=2&api_key=${apiKey}`)
    return movie.data.results;
}

export const getMovieLatest = async() => {
    const movie = await axios.get(`${baseUrl}/movie/now_playing?page=2&api_key=${apiKey}`)
    return movie.data.results;

}

export const getMovieTop = async() => {
    const movie = await axios.get(`${baseUrl}/movie/top_rated?page=2&api_key=${apiKey}`)
    return movie.data.results;

}

export const getMovieComing = async() => {
    const movie = await axios.get(`${baseUrl}/movie/upcoming?page=2&api_key=${apiKey}`)
    return movie.data.results;

}

export const searchMovies = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=3&api_key=${apiKey}`)
    return search.data;
}

export const detailMovies = async(id) => {
    const detail = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}&append_to_response=videos`)
    return detail.data;
}

export const creditsMovies = async(id) => {
    const credits = await axios.get(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
    return credits.data;
}

export const getSimilarMovies = async(id) => {
    const similar = await axios.get(`${baseUrl}/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`)
    return similar.data.results ;
}