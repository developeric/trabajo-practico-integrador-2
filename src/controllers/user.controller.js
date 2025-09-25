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
    const document = await UserModel.find().populate("article");
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
    const document = await UserModel.findById(id).populate("article","comment");
    if (!document) {
      console.log(document)
      return res
        .status(404)
        .json({ ok: false, msg: "No Encontrado", data: null });
    }
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
    if (!document) {
      console.log(document);
      return res.status(400).json({ msg: "No se ha Eliminado" });
    }
    return res
      .status(200)
      .json({ ok: true, msg: "Eliminado Correctamente", data: document });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ ok: false, msg: "No Eliminado", data: null });
  }
};

//GetProfiles
export const userWithProfile = async (req, res) => {
  const user = req.user;
  try {
    return res.json({
      id: user.id,
      firstName: user.profile.firstName,
      lastName: user.profile.lastName,
      biography: user.profile.biography,
      avatar_url: user.profile.avatar_url,
      birth_date: user.profile.birth_date,
    });
  } catch (error) {
    return res.status(404).json({
      ok: false,
      msg: "No se han encontrado los Profiles",
      data: null,
    });
  }
};

//UpdateProfileWithUsers
export const updateUserWithProfile = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const document = await UserModel.findByIdAndUpdate(id, { data });
    if (document) {
      return res
        .status(200)
        .json({ ok: true, msg: "Actualizado Correctamente", data: document });
    }
  } catch (error) {
    return res.status(404).json({
      ok: false,
      msg: "No Actualizado",
      data: null,
    });
  }
};

//FindUserWithArticlesAndComments
export const getUserWithAll = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await UserModel.findById(id).populate(
      "articles",
      "comment"
    );
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
