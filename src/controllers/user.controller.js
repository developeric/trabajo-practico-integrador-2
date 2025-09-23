import { hashPassword } from "../helpers/bcrypt.helper";
import { UserModel } from "../models/user.model";

export const createUser = async (req, res) => {
  //Desestructuración
  const {
    username,
    email,
    password,
    role,
profile
  } = req.body;
  try {
    //Creación
    const hashedPassword = hashPassword(password);
    const user = await createUser.create({
      username,
      email,
      password: hashedPassword,
      role,
      profile
    });
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: user });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "No Creado", data: null });
  }
};
