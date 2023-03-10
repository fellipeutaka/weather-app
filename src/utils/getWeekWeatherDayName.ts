import dayjs from "dayjs";

export function getWeekWeatherDayName(date: Date) {
  const tomorrow = dayjs().startOf("day").add(1, "day");

  if (dayjs(date).isSame(tomorrow)) {
    return new Intl.RelativeTimeFormat(undefined, { numeric: "auto" }).format(
      1,
      "day"
    );
  }

  return date.toLocaleDateString(undefined, { weekday: "long" });
}
