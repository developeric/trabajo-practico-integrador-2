if (user.role !== "admin") {
  return res.status(403).json({ msg: "Usted no tiene los permisos" });
}