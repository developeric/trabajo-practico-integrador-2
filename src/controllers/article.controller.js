import { ArticleModel } from "../models/article.model";

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
    return res.status(500).json({ ok: false, msg: "No Creado", data: null });
  }
};
