import type { AxiosRequestConfig } from "axios";
import dayjs from "dayjs";

import type {
  AirQuality,
  Forecast,
  ForecastList,
} from "@weather/@types/Weather";
import { api } from "@weather/lib/axios";

type FetchForecastProps = {
  latitude: number;
  longitude: number;
};

export async function fetchForecast(
  { latitude, longitude }: FetchForecastProps,
  config?: AxiosRequestConfig
) {
  const { data } = await api.get<Forecast>(
    `/forecast?lat=${latitude}&lon=${longitude}&units=metric`,
    config
  );

  const filteredList =
    data.list.reduce((acc: ForecastList[], item) => {
      const day = dayjs(item.dt_txt).format("YYYY-MM-DD");
      const existingDay = acc.find(
        (el) => dayjs(el.dt_txt).format("YYYY-MM-DD") === day
      );
      if (!existingDay) {
        return [...acc, item];
      }
      if (item.main.temp > existingDay.main.temp) {
        return acc.map((el) =>
          dayjs(el.dt_txt).format("YYYY-MM-DD") === day ? item : el
        );
      }
      return acc;
    }, []) ?? [];

  return {
    ...data,
    list: filteredList,
  } as Forecast;
}

type FetchAirPollutionProps = {
  latitude: number;
  longitude: number;
};

export async function fetchAirPollution(
  { latitude, longitude }: FetchAirPollutionProps,
  config?: AxiosRequestConfig
) {
  const { data } = await api.get<AirQuality>(
    `/air_pollution?lat=${latitude}&lon=${longitude}&units=metric`,
    config
  );
  return data;
}
