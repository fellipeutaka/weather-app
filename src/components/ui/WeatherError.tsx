const errorMessages = {
  0: "You need to allow to access your location to use the application",
  1: "An error occurred while trying to get your location",
  2: "An error occurred while trying to get your location",
};

type WeatherErrorProps = {
  error: GeolocationPositionError;
};

export function WeatherError({ error }: WeatherErrorProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-2xl font-bold">
        {errorMessages[error.code as keyof typeof errorMessages]}
      </span>
    </div>
  );
}
