// src/api/tmdbApi.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
export const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;
export const IMAGE_BASE_URL_HIGHRES = import.meta.env.VITE_TMDB_IMAGE_BASE_URL_HIGHRES;

const tmdb = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'en-US', // Default language
    }
});

/** FR1.0: Fetch categorized movie lists */
export const fetchMovies = async (category) => {
    try {
        const response = await tmdb.get(`/movie/${category}`);
        return response.data.results;
    } catch (error) {
        console.error(`Error fetching ${category} movies:`, error);
        return [];
    }
};

/** FR3.0: Search functionality */
export const searchMovies = async (query) => {
    if (!query) return [];
    try {
        const response = await tmdb.get('/search/movie', {
            params: { query: query }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};

/** FR5.0: Fetch movie details */
export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await tmdb.get(`/movie/${movieId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching movie details for ID ${movieId}:`, error);
        return null;
    }
};

export default {
    fetchMovies,
    searchMovies,
    fetchMovieDetails,
};