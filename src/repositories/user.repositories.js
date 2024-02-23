import User from "../models/User.js";

const findByEmailUserRepository = (email) => User.findOne({ email: email });

const createUserRepository = ({ email, password }) =>
  User.create({
    email,
    password,
  });

const findAllUserRepository = () => User.find();

const findByIdUserRepository = (idUser) => User.findById(idUser);

export default {
  createUserRepository,
  findAllUserRepository,
  findByIdUserRepository,
  findByEmailUserRepository,
};
