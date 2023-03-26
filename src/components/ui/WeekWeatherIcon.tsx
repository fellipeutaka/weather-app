import { WeatherIconType, WeatherIcon } from "@/@types/Forecast";

import { Clouds } from "../icons/Clouds";
import { Cloudy } from "../icons/Cloudy";
import { Rain } from "../icons/Rain";
import { Sun } from "../icons/Sun";
import { Thunder } from "../icons/Thunder";

type WeekWeatherIconProps = {
  icon: WeatherIconType;
};

export function WeekWeatherIcon({ icon }: WeekWeatherIconProps) {
  switch (true) {
    case icon.includes(WeatherIcon.CLEAR_SKY):
      return <Sun className="h-16 w-16" aria-label="Sun" />;
    case icon.includes(WeatherIcon.FEW_CLOUDS):
      return <Cloudy className="h-16 w-16" aria-label="Cloudy" />;
    case icon.includes(WeatherIcon.SCATTERED_CLOUDS):
    case icon.includes(WeatherIcon.BROKEN_CLOUDS):
      return <Clouds className="h-16 w-16" aria-label="Clouds" />;
    case icon.includes(WeatherIcon.SHOWER_RAIN):
    case icon.includes(WeatherIcon.RAIN):
      return <Rain className="h-16 w-16" aria-label="Rain" />;
    case icon.includes(WeatherIcon.THUNDERSTORM):
      return <Thunder className="h-16 w-16" aria-label="Thunderstorm" />;
    default:
      return null;
  }
}
