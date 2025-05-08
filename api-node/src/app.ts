import express, { Request, Response } from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const now = new Date().toUTCString();
    const response = {
      now: now.toLocaleString(),
      api: "node",
    };
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/ping", async (req: Request, res: Response) => {
  try {
    res.status(200).send("pong");
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

app.use(errorHandler);


export default app;