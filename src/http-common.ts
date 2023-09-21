import axios from "axios";

export default axios.create({
  baseURL: "https://physio-backend-nine.vercel.app/",
  headers: {
    "Content-type": "application/json",
  }
});
