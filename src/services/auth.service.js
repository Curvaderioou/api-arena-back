import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import userRepositories from "../repositories/user.repositories.js";

function generateToken(id) {
  return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });
}

const loginService = async ({ name, password }) => {
  const user = await userRepositories.findByNameUserRepository(name);

  if (!user) throw new Error("Wrong password or username");

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw new Error("Invalid password or name");

  const token = generateToken(user.id);

  return token;
};

export default { loginService, generateToken };
