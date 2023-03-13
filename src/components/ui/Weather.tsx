import { AirQuality } from "./AirQuality";
import { SunTime } from "./SunTime";
import { TemperatureNow } from "./TemperatureNow";
import { WeekWeather } from "./WeekWeather";

type WeatherProps = {
  coords: GeolocationCoordinates;
};

export function Weather({ coords }: WeatherProps) {
  return (
    <main className="flex w-full flex-col gap-8 lg:max-w-6xl lg:flex-row">
      <TemperatureNow />
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-6">
        <AirQuality />
        <SunTime />
        <WeekWeather />
      </div>
    </main>
  );
}
