import { TagModel } from "../models/tag.model";

export const createTag = async (req, res) => {
  try {
    //Desestructuración
    const { content, author, article } = req.body;
    //creación
    const tag = await TagModel.create(req.body);
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: tag });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "No Creado", data: null });
  }
};