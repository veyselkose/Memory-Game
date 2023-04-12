import { easy, medium,hard } from "@/lib/flags";

import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  if (req.body.difficulty === "easy") {
    res.status(200).json(easy.sort((a, b) => 0.5 - Math.random()));
  } else if (req.body.difficulty === "medium") {
    res.status(200).json(medium.sort((a, b) => 0.5 - Math.random()));
  } else if (req.body.difficulty === "hard") {
    res.status(200).json(hard.sort((a, b) => 0.5 - Math.random()));
  }
}
