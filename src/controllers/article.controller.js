import { ArticleModel } from "../models/article.model.js";

export const createArticle = async (req, res) => {
  try {
    //Desestructuración
    const { title, content, excerpt, status, author, tags } = req.body;
    //creación
    const article = await ArticleModel.create(req.body);
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: article });
  } catch (error) {
    return res.status(400).json({ ok: false, msg: "No Creado", data: null });
  }
};

export const updateArticle = async (req, res) => {
  //Desestructuración
  const { id } = req.params;
  const { title, content, excerpt, status, tags } = req.body;
  try {
    const article = await ArticleModel.findByIdAndUpdate(
      id,
      {
        title,
        content,
        excerpt,
        status,
        tags,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ msg: "Actualizado Correctamente", data: article });
  } catch (error) {
    return res.status(400).json({ msg: "No creado", data: null });
  }
};
