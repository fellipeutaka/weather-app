import type { NextApiRequest, NextApiResponse } from "next";

export default function test(req: NextApiRequest, res: NextApiResponse) {
  return res
    .setHeader("Cache-Control", "s-maxage=10 stale-while-revalidate")
    .status(200)
    .json({ time: new Date().toISOString() });
}
