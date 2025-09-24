export const AdminMiddleware = async (req, res,next) => {
  const user = req.user;
  try {
    if (user.role === "admin") {
      return next()
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Internal Error Server" });
  }
};

//Revisa que el rol del usuario sea igual a Administrador