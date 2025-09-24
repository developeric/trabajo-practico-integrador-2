import { UserModel } from "../models/user.model.js";

//Update
export const updateUser = async (req, res) => {
  //Desestructuración
  const { id } = req.params;
  const data = req.body;
  try {
    const document = await UserModel.findByIdAndUpdate(id, data, { new: true });
    return res
      .status(200)
      .json({ msg: "Actualizado Correctamente", data: document });
  } catch (error) {
    return res.status(400).json({ msg: "No Actualizado", data: null });
  }
};

//FindAll
export const getUser = async (req, res) => {
  try {
    const document = await UserModel.find();
    return res
      .status(200)
      .json({ ok: true, msg: "Obtenido Correctamente", data: document });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ ok: false, msg: "No Encontrados", data: null });
  }
};

//FindbyID
export const getUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await UserModel.findById(id);
    return res
      .status(200)
      .json({ ok: true, msg: "Obtenido Correctamente", data: document });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ ok: false, msg: "No Encontrado", data: null });
  }
};

//Delete
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await UserModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ ok: true, msg: "Eliminado Correctamente", data: document });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ ok: false, msg: "No Eliminado", data: null });
  }
};
