import MapMarker from "@iconify-icons/mdi/map-marker";
import Humidity from "@iconify-icons/mdi/water-drop";
import WeatherDust from "@iconify-icons/mdi/weather-dust";
import WeatherRainy from "@iconify-icons/mdi/weather-rainy";
import { Icon } from "@iconify/react/offline";

import type { Forecast } from "@weather/@types/Forecast";

import { Clouds } from "../icons/Clouds";

type TemperatureNowProps = {
  data: Forecast;
};

function getRainPercentage(amount?: number) {
  return amount ? amount * 100 : 10;
}

export function TemperatureNow({ data }: TemperatureNowProps) {
  return (
    <section className="relative col-span-2 grid grid-rows-section rounded-xl bg-secondary bg-image-temperature bg-cover bg-center bg-no-repeat xl:col-auto xl:row-span-full">
      <Clouds
        className="absolute -top-4 -left-16 z-10"
        aria-label="Clouds icon"
      />
      <div className="flex items-center gap-1 justify-self-end px-8 pt-8 text-alternative">
        <Icon
          icon={MapMarker}
          className="h-5 w-5"
          aria-label="Map Marker icon"
        />
        <strong className="text-sm font-bold">
          {data.city.name}, {data.city.country}
        </strong>
      </div>
      <div className="m-16 flex justify-center gap-1 font-bold">
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
      <div className="flex gap-2 p-3">
        <div className="flex flex-1 items-center gap-3 rounded-md bg-tertiary/60 py-1 px-4">
          <Icon icon={WeatherDust} className="h-8 w-8 opacity-60" />
          <div>
            <span className="text-xs">Wind</span>
            <div className="flex items-end gap-1">
              <span className="text-lg font-bold">
                {Math.round(data.list[0].wind.speed)}
              </span>
              <span className="text-overshadow">km/h</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3 rounded-md bg-tertiary/60 py-1 px-4">
          <Icon icon={Humidity} className="h-8 w-8 opacity-60" />
          <div>
            <span className="text-xs">Humidity</span>
            <div className="flex items-end gap-1">
              <span className="text-lg font-bold">
                {Math.round(data.list[0].main.humidity)}
              </span>
              <span className="text-overshadow">%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3 rounded-md bg-tertiary/60 py-1 px-4">
          <Icon icon={WeatherRainy} className="h-8 w-8 opacity-60" />
          <div>
            <span className="text-xs">Rain</span>
            <div className="flex items-end gap-1">
              <span className="text-lg font-bold">
                {getRainPercentage(data.list[0].rain?.["3h"])}
              </span>
              <span className="text-overshadow">%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
