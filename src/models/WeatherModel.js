import axios from 'axios';

const ApiKey = "API KEY";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error("City not found");
  }
};
