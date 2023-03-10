import { useEffect } from "react";

import { Lato } from "next/font/google";

import { Weather } from "@weather/components/ui/Weather";
import { SEO } from "@weather/components/utils/SEO";
import { getCurrentPosition } from "@weather/utils/getCurrentPosition";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    getCurrentPosition().then(({ coords }) => {
      console.log(coords);
    });
  }, []);

  return (
    <SEO
      title="Weather App"
      description="A page with weather information based on your location."
    >
      <main
        className={`${lato.className} grid min-h-screen place-items-center`}
      >
        <Weather />
      </main>
    </SEO>
  );
}
