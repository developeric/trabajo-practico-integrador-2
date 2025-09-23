import { hashPassword } from "../helpers/bcrypt.helper";
import { generateToken } from "../helpers/generateToken.helper";
import { UserModel } from "../models/user.model";

//REGISTER
export const Register = async (req, res) => {
  //Desestructuración
  const { username, email, password, role, profile } = req.body;
  try {
    //Creación
    const hashedPassword = hashPassword(password);
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      role,
      profile,
    });
    return res
      .status(201)
      .json({ ok: true, msg: "Registrado Correctamente", data: user });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "No Registrado", data: null });
  }
};

//LOGIN
export const Login = async (req, res) => {
  const { username, password } = req.body;

  const logueado = await UserModel.findOne({ username });

  if (!logueado) {
    return res.status(400).json({ ok: false, msg: "Algo ha Salido Mal" });
  }

  const validPassword = await comparePassword(password, user.password);

  if (!validPassword) {
    return res.status(401).json({ ok: false, msg: "Algo ha salido Mal" });
  }

  const token = generateToken({
    id: user.id,
    name: user.profile.firstName,
    lastname: user.profile.lastName,
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
  });
  return res.status(200).json({ ok: true, msg: "Logueado Correctamente" });
};


//LOGOUT
export const Logout = (req, res) => {
  res.clearCookie("token"); // Eliminar cookie del navegador
  return res.json({ message: "Logout exitoso" });
};
