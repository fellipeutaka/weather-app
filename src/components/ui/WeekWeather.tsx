import type { Forecast } from "@weather/@types/Forecast";
import { getWeekWeatherDayName } from "@weather/utils/getWeekWeatherDayName";

import { WeekWeatherIcon } from "./WeekWeatherIcon";

type WeekWeatherProps = {
  data: Forecast;
};

export function WeekWeather({ data }: WeekWeatherProps) {
  return (
    <section className="col-span-2 grid place-items-center rounded-xl bg-secondary">
      <ul className="flex w-full items-center justify-between gap-3 p-10">
        {data.list.slice(1).map((item) => (
          <li className="flex flex-col items-center gap-4" key={item.dt_txt}>
            <h1 className="text-sm font-bold capitalize text-overshadow">
              {getWeekWeatherDayName(new Date(item.dt_txt))}
            </h1>
            <WeekWeatherIcon icon={item.weather[0].icon} />
            <div className="flex gap-1 font-bold">
              <span>{Math.round(item.main.temp_max)}°</span>
              <span className="text-alternative">
                {Math.round(item.main.temp_min)}°
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
