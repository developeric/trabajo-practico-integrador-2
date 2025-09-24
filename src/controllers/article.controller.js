import { ArticleModel } from "../models/article.model.js";


//Create
export const createArticle = async (req, res) => {
  try {
    //Desestructuración
    const { title, content, excerpt, status, author, tags } = req.body;
    //creación
    const document = await ArticleModel.create(req.body);
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: document });
  } catch (error) {
    return res.status(400).json({ ok: false, msg: "No Creado", data: null });
  }
};

//Update
export const updateArticle = async (req, res) => {
  //Desestructuración
  const { id } = req.params;
  const { title, content, excerpt, status, tags } = req.body;
  try {
    const document = await ArticleModel.findByIdAndUpdate(
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
      .json({ msg: "Actualizado Correctamente", data: document });
  } catch (error) {
    return res.status(400).json({ msg: "No Actualizado", data: null });
  }
};

//FindAll
export const getArticle = async (req, res) => {
  try {
    const document = await ArticleModel.find();
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
export const getArticleByID = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await ArticleModel.findById(id);
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
export const deleteArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await ArticleModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ ok: true, msg: "Eliminado Correctamente", data: document });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ ok: false, msg: "No Eliminado", data: null });
  }
};
