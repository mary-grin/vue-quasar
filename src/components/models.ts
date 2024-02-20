export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  name: string;
}
