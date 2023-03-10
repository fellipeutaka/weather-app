import { TimeAndWeather24Filled } from "@fluentui/react-icons";

export function SunTime() {
  return (
    <section className="grid place-items-center rounded-xl bg-secondary">
      <header className="flex items-center gap-2 text-overshadow">
        <TimeAndWeather24Filled className="h-6 w-6" />
        <h1 className="font-bold">Sun Time</h1>
      </header>
      <div id="chart" className="h-36 w-60 bg-primary/50" />
    </section>
  );
}
