import { CommentModel } from "../models/comment.model";

export const createComment = async (req, res) => {
  try {
    //Desestructuración
    const { name, description } = req.body;
    //Creación
    const comment = await CommentModel.create(req.body);
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: comment });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "No Creado", data: null });
  }
};
