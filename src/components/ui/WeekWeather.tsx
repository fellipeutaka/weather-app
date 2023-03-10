import dayjs from "dayjs";

import { getWeekWeatherDayName } from "@weather/utils/getWeekWeatherDayName";

import { Clouds } from "../icons/Clouds";

const data = [
  {
    day: dayjs().startOf("day").add(1, "day").toDate(),
    forecast: "clouds",
    temperature: {
      max: 21,
      min: 16,
    },
  },
  {
    day: dayjs().startOf("day").add(2, "day").toDate(),
    forecast: "sun",
    temperature: {
      max: 28,
      min: 20,
    },
  },
  {
    day: dayjs().startOf("day").add(3, "day").toDate(),
    forecast: "rain",
    temperature: {
      max: 25,
      min: 21,
    },
  },
  {
    day: dayjs().startOf("day").add(4, "day").toDate(),
    forecast: "thunderstorm",
    temperature: {
      max: 20,
      min: 14,
    },
  },
  {
    day: dayjs().startOf("day").add(5, "day").toDate(),
    forecast: "sun",
    temperature: {
      max: 24,
      min: 18,
    },
  },
];

export function WeekWeather() {
  return (
    <section className="col-span-2 grid place-items-center rounded-xl bg-secondary">
      <ul className="flex w-full items-center justify-center gap-8 p-10">
        {data.map((item) => (
          <li
            className="flex flex-col items-center gap-4"
            key={String(item.day.getTime())}
          >
            <h1 className="font-bold capitalize text-overshadow">
              {getWeekWeatherDayName(item.day)}
            </h1>
            <Clouds className="h-16 w-16" aria-label="Clouds" />
            <div className="flex gap-1 font-bold">
              <span>{item.temperature.max}°</span>
              <span className="text-alternative">{item.temperature.min}°</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
