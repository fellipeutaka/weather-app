import { Lato } from "next/font/google";

import { Weather } from "@weather/components/ui/Weather";
import { WeatherError } from "@weather/components/ui/WeatherError";
import { WeatherLoading } from "@weather/components/ui/WeatherLoading";
import { SEO } from "@weather/components/utils/SEO";
import { useCoords } from "@weather/hooks/useCoords";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const { coords, error, isLoading } = useCoords();

  return (
    <SEO
      title="Weather App"
      description="A page with weather information based on your location."
    >
      <main
        className={`${lato.className} grid min-h-screen place-items-center`}
      >
        {isLoading && <WeatherLoading />}
        {error && <WeatherError error={error} />}
        {coords && <Weather coords={coords} />}
      </main>
    </SEO>
  );
}
