import axios from "axios";
const Key='import.meta.env.VITE_REACT_APP_RAPID_API_KEY'
const BASE_URL = `https://youtube-v31.p.rapidapi.com?apiKey=${Key}`;

const options = {
  url: BASE_URL,
  params: { maxResults: "75" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

