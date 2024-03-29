import { Lato } from "next/font/google";

import compassAnimation from "@/assets/animations/lottie-compass.json";
import { Weather } from "@/components/ui/Weather";
import { WeatherError } from "@/components/ui/WeatherError";
import { WeatherLoading } from "@/components/ui/WeatherLoading";
import { SEO } from "@/components/utils/SEO";
import { useCoords } from "@/hooks/useCoords";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const { coords, error, errorMessage, isLoading } = useCoords();

  return (
    <SEO
      title="Weather App"
      description="A page with weather information based on your location."
    >
      <div className={lato.className}>
        {isLoading && (
          <WeatherLoading
            message="Getting your coords"
            animationData={compassAnimation}
            speed={0.5}
          />
        )}
        {error && <WeatherError message={errorMessage} />}
        {coords && <Weather coords={coords} />}
      </div>
    </SEO>
  );
}
