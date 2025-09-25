import mongoose from "mongoose";

export const startDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("Conectado Correctamente");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error en la DataBase" });
  }
};
