import Court from "../models/Court.js";

function createCourtRepository(name) {
  return Court.create({ name });
}

function findAllCourtsRepository() {
  return Court.find().sort({ _id: 1 });
}

const findByIdCourtRepository = (id) => Court.findById(id);

export default {
  createCourtRepository,
  findAllCourtsRepository,
  findByIdCourtRepository,
};
