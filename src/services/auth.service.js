import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import userRepositories from "../repositories/user.repositories.js";

function generateToken(id) {
  return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });
}

const loginService = async ({ email, password }) => {
  const user = await userRepositories.findByEmailUserRepository(email);

  if (!user) throw new Error("Wrong password or email");

  const isPasswordValid = password == user.password;
  if (!isPasswordValid) throw new Error("Invalid password or email");

  const token = generateToken(user.id);

  return token;
};

export default { loginService, generateToken };
