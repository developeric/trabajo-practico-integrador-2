import mongoose from "mongoose";

export const startDB = async () => {
  try {
    process.env.MONGO_URl
    console.log("Conectado Correctamente");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error en la DataBase" });
  }
};
