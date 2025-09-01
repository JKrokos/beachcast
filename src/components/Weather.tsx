import { useWeather } from "../hooks/useWeather";
import { getWindDirection } from "../utils/windUtils";

const Weather = () => {
  const { weather, loading, error } = useWeather();

  if (loading)
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 text-center">
          <div className="animate-pulse text-slate-600">Loading weather...</div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-50/80 backdrop-blur-sm rounded-2xl p-6 text-center text-red-600">
          {error}
        </div>
      </div>
    );

  if (!weather) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
        <h2 className="text-2xl font-light text-slate-800 mb-1">
          Current Weather in <span className="font-medium">{weather.name}</span>
        </h2>

        <div className="flex items-center justify-center mb-1">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather icon"
            className="w-24 h-24"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/20 rounded-xl p-1">
            <div className="text-3xl font-light">
              {Math.round(weather.main.temp)}°
            </div>
            <div className="text-sm mt-1">Temperature</div>
          </div>

          <div className="bg-white/20 rounded-xl p-1">
            <div className="text-2xl font-light">
              {Math.round(weather.wind.speed)} m/s
            </div>
            <div className="text-sm mt-1">Wind Speed</div>
          </div>

          <div className="bg-white/20 rounded-xl p-1">
            <div className="text-2xl font-light">
              {getWindDirection(weather.wind.deg || 0)}
            </div>
            <div className="text-sm mt-1">Wind Direction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
