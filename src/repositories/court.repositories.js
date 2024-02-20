import Court from "../models/Court.js";

function createCourtRepository(name) {
  return Court.create({ name });
}

function findAllCourtsRepository() {
  return Court.find().sort({ _id: -1 });
}

export default { createCourtRepository, findAllCourtsRepository };
