export type Forecast = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastList[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

export type ForecastList = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: WeatherIconType;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain?: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export enum WeatherIcon {
  CLEAR_SKY = "01",
  FEW_CLOUDS = "02",
  SCATTERED_CLOUDS = "03",
  BROKEN_CLOUDS = "04",
  SHOWER_RAIN = "09",
  RAIN = "10",
  THUNDERSTORM = "11",
  SNOW = "13",
  MIST = "50",
}

export type WeatherIconType = `${WeatherIcon}d` | `${WeatherIcon}n`;
