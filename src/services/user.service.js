import authService from "../services/auth.service.js";
import bcrypt from "bcrypt";
import userRepositories from "../repositories/user.repositories.js";

async function createUserService({ email, password }) {
  if (!email || !password)
    throw new Error("Submit all fields for registration");

  const foundUser = await userRepositories.findByEmailUserRepository(email);

  if (foundUser) throw new Error("User already exists");

  const user = await userRepositories.createUserRepository({
    email,
    password,
  });

  if (!user) throw new Error("Error creating User");

  const token = authService.generateToken(user.id);

  return token;
}

async function findAllUserService() {
  const users = await userRepositories.findAllUserRepository();

  if (users.length === 0) throw new Error("There are no registered users");

  return users;
}

async function findUserByIdService(userIdParam, userIdLogged) {
  let idParam;
  if (!userIdParam) {
    userIdParam = userIdLogged;
    idParam = userIdParam;
  } else {
    idParam = userIdParam;
  }
  if (!idParam)
    throw new Error("Send an id in the parameters to search for the user");

  const user = await userRepositories.findByIdUserRepository(idParam);

  if (!user) throw new Error("User not found");

  return user;
}

export default {
  createUserService,
  findAllUserService,
  findUserByIdService,
};
