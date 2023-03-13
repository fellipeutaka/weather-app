import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!API_KEY) {
  throw new Error("NEXT_PUBLIC_API_KEY is required in .env");
}

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: API_KEY,
  },
});
