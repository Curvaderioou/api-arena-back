import User from "../models/User.js";

const findByNameUserRepository = (name) => User.findOne({ name: name });

const createUserRepository = ({ name, password }) =>
  User.create({
    name,
    password,
  });

const findAllUserRepository = () => User.find();

const findByIdUserRepository = (idUser) => User.findById(idUser);

export default {
  createUserRepository,
  findAllUserRepository,
  findByIdUserRepository,
  findByNameUserRepository,
};
