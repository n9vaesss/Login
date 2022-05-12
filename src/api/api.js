import axios from "axios";

//faz a conexão com a api

const api = axios.create({
  baseURL: "http://restapi.adequateshop.com",
});

export default api;
