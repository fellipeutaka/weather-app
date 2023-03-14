import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { WeatherResponse } from "@weather/pages/api/weather";

import { AirQuality } from "./AirQuality";
import { SunTime } from "./SunTime";
import { TemperatureNow } from "./TemperatureNow";
import { WeekWeather } from "./WeekWeather";

type WeatherProps = {
  coords: GeolocationCoordinates;
};

export function Weather({ coords }: WeatherProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["weather"],
    queryFn: async ({ signal }: QueryFunctionContext) => {
      const { data } = await axios.post<WeatherResponse>(
        "/api/weather",
        {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
        { signal }
      );

      return data;
    },
  });

  if (isLoading) {
    return (
      <div>
        <span className="loading text-2xl font-bold">Getting your coords</span>
      </div>
    );
  }

  if (isError) {
    return (
      <span className="loading text-2xl font-bold">
        An error has ocurred. Try again later!
      </span>
    );
  }

  return (
    <main className="flex w-full flex-col gap-8 lg:max-w-6xl lg:flex-row">
      <TemperatureNow data={data.forecast} />
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-6">
        <AirQuality data={data.airPollution} />
        <SunTime />
        <WeekWeather data={data.forecast} />
      </div>
    </main>
  );
}
