const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const LAT = "37.450001";
const LON = "25.350000";

const GetCurrentWeather = () => {
  const data = fetch(
    `${BASE_URL}?lat=${LAT}&lon=${LON}&exclude=hourly,daily&appid=${API_KEY}&units=metric`
  ).then((res) => res.json());
  return data;
};

export default GetCurrentWeather;
