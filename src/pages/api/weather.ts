import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import type { AirQuality, Forecast } from "@weather/@types/Weather";
import {
  fetchAirPollution,
  fetchForecast,
} from "@weather/utils/fetchWeatherData";

const bodySchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

const revalidate = 1 * 60 * 60; // 1 hour

export type WeatherResponse = {
  forecast: Forecast;
  airPollution: AirQuality;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = await bodySchema.safeParseAsync(req.body);
  if (!body.success) {
    return res.status(400).send(null);
  }
  const { latitude, longitude } = body.data;
  const [forecast, airPollution] = await Promise.all([
    fetchForecast({ latitude, longitude }),
    fetchAirPollution({ latitude, longitude }),
  ]);
  return res
    .setHeader("Cache-Control", `s-maxage=${revalidate} stale-while-revalidate`)
    .status(200)
    .json({ forecast, airPollution });
}
