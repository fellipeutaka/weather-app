import type { Forecast, AirQuality } from "@weather/@types/Weather";
import { api } from "@weather/lib/axios";

type GetWeatherDataProps = {
  latitude: number;
  longitude: number;
};

export async function getWeatherData({
  latitude,
  longitude,
}: GetWeatherDataProps) {
  const [forecast, airQuality] = await Promise.all([
    api
      .get<Forecast>(`/forecast?lat=${latitude}&lon=${longitude}&units=metric`)
      .then(({ data }) => data),
    api
      .get<AirQuality>(
        `/air_pollution?lat=${latitude}&lon=${longitude}&units=metric`
      )
      .then(({ data }) => data),
  ]);

  return {
    forecast,
    airQuality,
  };
}
