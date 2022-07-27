import axios from "axios";

export default function Post({ seats }) {
    return axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', seats);
}