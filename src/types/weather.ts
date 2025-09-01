export interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  name: string;
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WindData {
  speed: number;
  deg: number;
}

export interface Beach {
  name: string;
  coordinates: {
    lat: number;
    lon: number;
  };
}

export interface BeachGroup {
  north: Beach[];
  south: Beach[];
  east: Beach[];
  west: Beach[];
}