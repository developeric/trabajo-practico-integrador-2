import { TagModel } from "../models/tag.model.js";

//Create
export const createTag = async (req, res) => {
  try {
    //Desestructuración
    const { name, description } = req.body;
    //creación
    const document = await TagModel.create(req.body);
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: document });
  } catch (error) {
    return res.status(400).json({ ok: false, msg: "No Creado", data: null });
  }
};

//Update
export const updateTag = async (req, res) => {
  //Desestructuración
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const document = await TagModel.findByIdAndUpdate(
      id,
      {
        name,
        description,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ msg: "Actualizado Correctamente", data: document });
  } catch (error) {
    return res.status(400).json({ msg: "No Actualizado", data: null });
  }
};

//FindAll
export const getTag = async (req, res) => {
  try {
    const document = await TagModel.find();
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
export const getTagByID = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await TagModel.findById(id);
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
export const deleteTag = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await TagModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ ok: true, msg: "Eliminado Correctamente", data: document });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ ok: false, msg: "No Eliminado", data: null });
  }
};
