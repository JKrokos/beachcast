import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import GetCurrentWeather from '../services/WeatherService';
import type { WeatherData } from '../types/weather';
import { WeatherContext } from '../contexts/WeatherContext';

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const weatherData = await GetCurrentWeather();
        setWeather(weatherData);
      } catch (err) {
        setError('Failed to fetch weather data');
        console.error('Error fetching weather:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};
