import Leaf from "@iconify-icons/mdi/leaf";
import { Icon } from "@iconify/react/offline";

const unknownInfo = [
  {
    label: "PM2.5",
    value: "12.9",
  },
  {
    label: "PM10",
    value: "12.9",
  },
  {
    label: "SO₂",
    value: "2.1",
  },
  {
    label: "NO₂",
    value: "1.4",
  },
  {
    label: "O₃",
    value: "21.2",
  },
  {
    label: "CO",
    value: "0.7",
  },
];

export function AirQuality() {
  return (
    <section className="rounded-xl bg-secondary px-4 pb-4 pt-8 text-center">
      <header className="flex items-center justify-center gap-2 text-overshadow">
        <Icon icon={Leaf} className="h-5 w-5" />
        <h1 className="font-bold">Air Quality</h1>
      </header>
      <div className="my-8 flex flex-col items-center">
        <span className="text-lg font-bold text-teal-300">Good</span>
        <span className="text-5xl font-bold">21</span>
      </div>
      <ul className="flex gap-4">
        {unknownInfo.map((info) => (
          <li className="flex flex-col items-center" key={info.label}>
            <span className="text-sm font-bold text-teal-300">
              {info.value}
            </span>
            <span className="text-xs">{info.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
