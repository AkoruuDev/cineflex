import axios from "axios";

export default function Get({ page, id }) {
    if (page === 'movie') {
        return axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    }
    if (page === 'session') {
        return axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)
    }
    if (page === 'seat') {
        return axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)
    }
}