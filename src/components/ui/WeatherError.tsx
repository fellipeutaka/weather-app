type WeatherErrorProps = {
  message: string;
  children?: React.ReactNode;
};

export function WeatherError({ message, children }: WeatherErrorProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <span className="text-2xl font-bold">{message}</span>
      {children}
    </div>
  );
}
