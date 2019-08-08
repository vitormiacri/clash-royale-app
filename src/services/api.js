import axios from "axios";

const api = axios.create({
  baseURL: "https://api.royaleapi.com/",
  headers: {
    auth: process.env.REACT_APP_API_KEY
  }
});

export default api;
