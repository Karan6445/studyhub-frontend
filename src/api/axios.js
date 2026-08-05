import axios from "axios";

const api = axios.create({
  baseURL: "https://studyhub-backend-0lfd.onrender.com/api",
});

export default api;