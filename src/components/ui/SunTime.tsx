import { TimeAndWeather24Filled } from "@fluentui/react-icons";

export function SunTime() {
  return (
    <section className="col-span-2 grid place-items-center gap-6 rounded-xl bg-secondary px-4 pb-4 pt-8 lg:col-auto">
      <header className="flex items-center gap-2 text-overshadow">
        <TimeAndWeather24Filled className="h-6 w-6" />
        <h1 className="font-bold">Sun Time</h1>
      </header>
      <object data="/assets/svg/chart.svg" type="image/svg+xml" />
    </section>
  );
}
