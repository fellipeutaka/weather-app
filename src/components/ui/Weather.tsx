import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import axios from "axios";

import satelliteAnimation from "@weather/assets/animations/lottie-satellite.json";
import type { WeatherResponse } from "@weather/pages/api/weather";

import { Button } from "../form/Button";
import { AirQuality } from "./AirQuality";
import { SunTime } from "./SunTime";
import { TemperatureNow } from "./TemperatureNow";
import { WeatherError } from "./WeatherError";
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
      <WeatherError message="An error has occurred while trying to fetch weather data">
        <Button onClick={() => refetch()}>Try again</Button>
      </WeatherError>
    );
  }

  return (
    <main className="grid min-h-screen grid-cols-main-sm grid-rows-main-sm place-content-center gap-6 p-16 lg:grid-cols-main-lg lg:grid-rows-main-lg xl:grid-cols-main-xl xl:grid-rows-main-xl">
      <TemperatureNow data={data.forecast} />
      <AirQuality data={data.airPollution} />
      <SunTime />
      <WeekWeather data={data.forecast} />
    </main>
  );
}
