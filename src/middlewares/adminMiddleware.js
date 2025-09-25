export const AdminMiddleware = async (req, res, next) => {
  const user = req.user;
  try {
    if (user.role === "admin") {
      return next();
    }
    return res
      .status(403)
      .json({ ok: false, msg: "Usted no es Administrador", data: null });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Internal Error Server" });
  }
};

//Revisa que el rol del usuario sea igual a Administrador
