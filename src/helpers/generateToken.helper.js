import jwt from "jsonwebtoken";

// Generar token JWT

export const generateToken = (user) => {
  try {
    return jwt.sign(
      {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        biography: user.biography,
        avatar_url: user.avatar_url,
        birth_date: user.birth_date
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
  } catch (error) {
    throw new Error("Error generando el token: " + error.message);
  }
};
