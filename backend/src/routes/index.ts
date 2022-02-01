import express, { Response, Request } from "express";

export const router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.send("Server running");
});
