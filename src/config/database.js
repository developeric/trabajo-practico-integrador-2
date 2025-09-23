import mongoose from "mongoose";

export const startDB = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/ericbase");
    console.log("Conectado Correctamente");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error en la DataBase" });
  }
};
