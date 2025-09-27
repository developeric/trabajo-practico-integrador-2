import { ArticleModel } from "../models/article.model.js";
import { CommentModel } from "../models/comment.model.js";

//Create
export const createComment = async (req, res) => {
  try {
    //Desestructuración
    const { content, author, article } = req.body;
    //creación
    const document = await CommentModel.create(req.body);
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: document });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ ok: false, msg: "No Creado", data: null });
  }
};

//Update
export const updateComment = async (req, res) => {
  //Desestructuración
  const { id } = req.params;
  const { content } = req.body;
  try {
    const document = await CommentModel.findByIdAndUpdate(
      id,
      {
        content,
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
export const getComment = async (req, res) => {
  try {
    const document = await CommentModel.find();
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
export const getCommentByID = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await CommentModel.findById(id);
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
export const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await CommentModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ ok: true, msg: "Eliminado Correctamente", data: document });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ ok: false, msg: "No Eliminado", data: null });
  }
};

//FindbyIdWithAuthor
export const getCommentWithAuthor = async (req, res) => {
  const { articleId } = req.params;
  try {
    const article = await ArticleModel.findById(articleId)
      .populate("author", "username profile.firstName profile.lastName")
      .populate({
        path: "comment",
        populate: {
          path: "author",
          select: "username profile.firstName profile.lastName",
        },
      });
    //
    return res.status(200).json({
      msg: "Comentarios del artículo obtenidos correctamente",
      data: article,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ ok: false, msg: "No Encontrado", data: null });
  }
};


//CommentsMy
//FindAll
export const getCommentsMy = async (req, res) => {
  const user = req.user
  try {
    const document = await CommentModel.find({author:user.id});
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