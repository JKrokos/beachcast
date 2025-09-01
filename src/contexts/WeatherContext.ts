import { createContext } from 'react';
import type { WeatherData } from '../types/weather';

export interface WeatherContextType {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);
