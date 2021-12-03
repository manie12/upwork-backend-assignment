import axios from 'axios';

export const api = axios.create({
    baseURL: `https://upwork-assignment.herokuapp.com/movie`
})