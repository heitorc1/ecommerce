import express from "express";
import path from "path";

import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import { router } from "./routes";

export const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(router);
