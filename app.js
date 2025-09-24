import express from "express";
import "dotenv/config";
import { startDB } from "./src/config/database.js";
import cookieParser from "cookie-parser";
import { routes } from "./src/routes/index.routes.js";
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use("/api",routes);



//Start Data Base
app.listen(PORT, async () => {
  await startDB(), console.log("Servidor Funcando");
});
