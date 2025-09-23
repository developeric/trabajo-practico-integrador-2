import express from "express";
import "dotenv/config";
import { startDB } from "./src/config/database.js";
const app = express();
const PORT = process.env.PORT;



//Start Data Base
app.listen(PORT,async()=>{
    await startDB(),
    console.log("Servidor Funcando")
})