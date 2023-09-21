import axios from "axios";

export default axios.create({
  baseURL: "https://physio-backend.onrender.com/",
  headers: {
    "Content-type": "application/json",
  }
});
