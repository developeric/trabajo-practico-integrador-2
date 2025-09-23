import jwt from "jsonwebtoken";

// Generar token JWT

export const generateToken = (payload) => {
  try {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
      expiresIn: process.env.JWT_EXPIRES,
    });
  } catch (error) {
    throw new Error("Error generando el token: " + error.message);
  }
};

