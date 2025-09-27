import { ArticleTagModel } from "../models/articleTags.model.js";

export const createArticleTag = async (req, res) => {
  const { articleId, tagId } = req.params
  const { article, tag } = req.body;
  try {
    const document = await ArticleTagModel.create(req.body);
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: document });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ ok: false, msg: "No Creado", data: null });
  }
};


export const deleteArticleTag = async (req, res) => {
  const { tagId } = req.params;
  try {
    const document = await ArticleTagModel.findByIdAndDelete(tagId);
    return res
      .status(201)
      .json({ ok: true, msg: "Borrado Correctamente", data: document });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ ok: false, msg: "No Borrado", data: null });
  }
};