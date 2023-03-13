import dayjs from "dayjs";

import type { AirQuality, Forecast } from "@weather/@types/Weather";

type GetWeatherDataProps = {
  forecast: Forecast;
  airQuality: AirQuality;
};

export async function getWeatherData({
  airQuality,
  forecast,
}: GetWeatherDataProps) {
  const currentTime = dayjs();

  const filteredList = airQuality.list.filter((item) => {
    const itemTime = dayjs.unix(item.dt);

    return (
      itemTime.isSame(currentTime, "hour") ||
      (itemTime.isAfter(currentTime, "hour") &&
        itemTime.diff(currentTime, "day") < 6 &&
        itemTime.hour() === currentTime.hour())
    );
  });

  console.log({ forecast, filteredList });

  return { forecast, airQuality: filteredList };
}
