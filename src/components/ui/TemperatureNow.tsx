import MapMarker from "@iconify-icons/mdi/map-marker";
import Humidity from "@iconify-icons/mdi/water-drop";
import WeatherDust from "@iconify-icons/mdi/weather-dust";
import WeatherRainy from "@iconify-icons/mdi/weather-rainy";
import { Icon } from "@iconify/react/offline";

import { Forecast } from "@weather/@types/Weather";

import { Clouds } from "../icons/Clouds";

type TemperatureNowProps = {
  data: Forecast;
};

export function TemperatureNow({ data }: TemperatureNowProps) {
  return (
    <section className="relative w-full rounded-xl bg-secondary bg-image-temperature bg-cover bg-center bg-no-repeat">
      <Clouds className="absolute -top-4 -left-16 z-10" aria-label="Clouds" />
      <div className="absolute top-8 right-8 flex items-center gap-1 text-alternative">
        <Icon icon={MapMarker} className="h-5 w-5" />
        <span className="font-bold">
          {data.city.name}, {data.city.country}
        </span>
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 text-center font-bold">
        <div className="flex">
          <div>
            <strong className="text-8xl font-bold">
              {Math.round(data.list[0].main.temp)}
            </strong>
            <div className="mt-4 flex justify-center gap-1 text-xl">
              <span>{Math.round(data.list[0].main.temp_max)}°</span>
              <span className="text-alternative">
                {Math.round(data.list[0].main.temp_min)}°
              </span>
            </div>
          </div>
          <span className="text-2xl text-overshadow">°C</span>
        </div>
      </div>
      <div className="absolute left-3 bottom-3 right-3 flex gap-2">
        <div className="flex h-full w-full items-center gap-3 rounded-md bg-primary/60 px-4 py-3">
          <Icon icon={WeatherDust} className="h-8 w-8 opacity-60" />
          <div>
            <span className="text-sm">Wind</span>
            <div className="flex items-end gap-1">
              <span className="text-lg font-bold">
                {Math.round(data.list[0].wind.speed)}
              </span>
              <span className="text-overshadow">km/h</span>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-center gap-3 rounded-md bg-primary/60 px-4 py-3">
          <Icon icon={Humidity} className="h-8 w-8 opacity-60" />
          <div>
            <span className="text-sm">Humidity</span>
            <div className="flex items-end gap-1">
              <span className="text-lg font-bold">
                {Math.round(data.list[0].main.humidity)}
              </span>
              <span className="text-overshadow">%</span>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-center gap-3 rounded-md bg-primary/60 px-4 py-3">
          <Icon icon={WeatherRainy} className="h-8 w-8 opacity-60" />
          <div>
            <span className="text-sm">Rain</span>
            <div className="flex items-end gap-1">
              <span className="text-lg font-bold">10</span>
              <span className="text-overshadow">%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
