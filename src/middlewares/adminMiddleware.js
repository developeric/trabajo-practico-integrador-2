export const AdminMiddleware = async (req, res,next) => {
  const admin = req.user;
  try {
    if (admin.role === "admin") {
      return next()
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Internal Error Server" });
  }
};
