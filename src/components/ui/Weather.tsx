import { QueryFunctionContext, useQueries } from "@tanstack/react-query";

import {
  fetchAirPollution,
  fetchForecast,
} from "@weather/utils/fetchWeatherData";

import { AirQuality } from "./AirQuality";
import { SunTime } from "./SunTime";
import { TemperatureNow } from "./TemperatureNow";
import { WeekWeather } from "./WeekWeather";

type WeatherProps = {
  coords: GeolocationCoordinates;
};

export function Weather({ coords }: WeatherProps) {
  const [forecast, airPollution] = useQueries({
    queries: [
      {
        queryKey: ["forecast"],
        queryFn: ({ signal }: QueryFunctionContext) =>
          fetchForecast(coords, { signal }),
      },
      {
        queryKey: ["airPollution"],
        queryFn: ({ signal }: QueryFunctionContext) =>
          fetchAirPollution(coords, { signal }),
      },
    ],
  });

  if (forecast.isLoading || airPollution.isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="flex w-full flex-col gap-8 lg:max-w-6xl lg:flex-row">
      <TemperatureNow data={forecast.data!} />
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-6">
        <AirQuality data={airPollution.data!} />
        <SunTime />
        <WeekWeather data={forecast.data!} />
      </div>
    </main>
  );
}
