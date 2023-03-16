import Leaf from "@iconify-icons/mdi/leaf";
import { Icon } from "@iconify/react/offline";

import type { AirQuality } from "@weather/@types/AirQuality";

type AirQualityProps = {
  data: AirQuality;
};

function getAirQualityStatus(aqi: number) {
  switch (true) {
    case aqi >= 0 && aqi <= 50:
      return "Good";
    case aqi >= 51 && aqi <= 100:
      return "Moderate";
    case aqi >= 101 && aqi <= 200:
      return "Not healthy";
    case aqi >= 201 && aqi <= 300:
      return "Very harmful to health";
    default:
      return "Dangerous";
  }
}

export function AirQuality({ data }: AirQualityProps) {
  return (
    <section className="rounded-xl bg-secondary px-4 pb-4 pt-8 text-center">
      <header className="flex items-center justify-center gap-2 text-overshadow">
        <Icon icon={Leaf} className="h-5 w-5" />
        <h1 className="font-bold">Air Quality</h1>
      </header>
      <div className="my-8 flex flex-col items-center">
        <span className="text-lg font-bold text-teal-300">
          {getAirQualityStatus(data.list[0].main.aqi)}
        </span>
        <span className="text-5xl font-bold">{data.list[0].main.aqi}</span>
      </div>
      <ul className="flex gap-4">
        <li className="flex flex-col items-center">
          <span className="text-sm font-bold text-teal-300">PM2.5</span>
          <span className="text-xs">
            {Math.round(data.list[0].components.pm2_5)}
          </span>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-sm font-bold text-teal-300">PM10</span>
          <span className="text-xs">
            {Math.round(data.list[0].components.pm10)}
          </span>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-sm font-bold text-teal-300">SO₂</span>
          <span className="text-xs">
            {Math.round(data.list[0].components.so2)}
          </span>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-sm font-bold text-teal-300">NO₂</span>
          <span className="text-xs">
            {Math.round(data.list[0].components.no2)}
          </span>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-sm font-bold text-teal-300">O₃</span>
          <span className="text-xs">
            {Math.round(data.list[0].components.o3)}
          </span>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-sm font-bold text-teal-300">CO</span>
          <span className="text-xs">
            {Math.round(data.list[0].components.co)}
          </span>
        </li>
      </ul>
    </section>
  );
}
