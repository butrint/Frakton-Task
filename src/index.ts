import "reflect-metadata";
import "./container";
import express from "express";
import dotenv from "dotenv";
import { useExpressServer } from "routing-controllers";
import { UtilsController } from "./controllers/utils.controller";

dotenv.config();

const app = express();

useExpressServer(app, {
  routePrefix: "/api/v1",
  controllers: [UtilsController],
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
