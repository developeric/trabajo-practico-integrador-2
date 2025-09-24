import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { startDB } from "./src/config/database.js";
import { routes } from "./src/routes/index.routes.js";

//CONSTANTES
const app = express();
const PORT = process.env.PORT;

//APP.USE
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

//STARTDB
app.listen(PORT, async () => {
  await startDB(), console.log("Servidor Funcando");
});
