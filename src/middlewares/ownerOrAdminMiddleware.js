export const ownerOrAdmin = (model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const user = req.user;
    try {
      if (user.role === "admin") {
        return next();
      }
      const recurso = await model.findOne({ _id: id, author: user.id });
      if (!recurso) {
        return res
          .status(403)
          .json({ msg: "Usted no tiene la autorizacion para acceder" });
      }
    } catch (error) {
        console.log(error)
      return res.status(500).json({ msg: "Internal Error Server" });
    }
  };
};
