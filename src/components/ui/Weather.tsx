import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import axios from "axios";

import satelliteAnimation from "@weather/assets/animations/lottie-satellite.json";
import type { WeatherResponse } from "@weather/pages/api/weather";

import { AirQuality } from "./AirQuality";
import { SunTime } from "./SunTime";
import { TemperatureNow } from "./TemperatureNow";
import { WeatherLoading } from "./WeatherLoading";
import { WeekWeather } from "./WeekWeather";

type WeatherProps = {
  coords: GeolocationCoordinates;
};

export function Weather({ coords }: WeatherProps) {
  const { data, isLoading, isError, refetch } = useQuery({
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
      <WeatherLoading
        className="h-64 w-64"
        message="Getting weather data"
        animationData={satelliteAnimation}
        speed={2}
      />
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-4">
        <span className="text-2xl font-bold">
          An error has occurred while trying to fetch weather data.
        </span>
        <button
          className="rounded-md bg-secondary px-6 py-2 font-bold outline-none ring-offset-2 ring-offset-primary transition hover:brightness-90 focus-visible:ring-2 focus-visible:ring-secondary"
          onClick={() => refetch()}
        >
          Try again
        </button>
      </div>
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
