import { useRef } from "react";

import Lottie, {
  LottieComponentProps,
  LottieRefCurrentProps,
} from "lottie-react";

type WeatherLoadingProps = LottieComponentProps & {
  message: string;
  speed?: number;
};

export function WeatherLoading({
  message,
  speed = 1,
  ...props
}: WeatherLoadingProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  lottieRef.current?.setSpeed(speed);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <span className="loading text-2xl font-bold">{message}</span>
      <Lottie lottieRef={lottieRef} className="h-32 w-32" loop {...props} />
    </div>
  );
}
