import Lottie from "lottie-react";

import compassAnimation from "@weather/assets/animations/lottie-compass.json";

export function WeatherLoading() {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="loading text-2xl font-bold">Getting your coords</span>
      <Lottie className="w-h-32 h-32" animationData={compassAnimation} loop />
    </div>
  );
}
