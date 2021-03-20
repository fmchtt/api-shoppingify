import express from "express";
const app = express();

import path from "path";

import config from "config";
import router from "./routes";
import cors from "cors";

app.use(
  cors()
);
app.use(express.json());
app.use(router);

app.use(
  "/api/v1/uploads",
  express.static(path.join(__dirname, "..", "uploads"))
);

app.listen(config.get("server.port"));
console.log("API online");
