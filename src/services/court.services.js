import courtRepositories from "../repositories/court.repositories.js";

async function createCourtService({ name }) {
  if (!name) {
    throw new Error("Submit all fields for registration");
  }
  const { id } = await courtRepositories.createCourtRepository(name);
  return {
    message: "Court created successfully!",
    Court: { id, name },
  };
}

async function findAllCourtsService() {
  const court = await courtRepositories.findAllCourtsRepository();
  return {
    results: court.map((courtItem) => ({
      id: courtItem.id,
      name: courtItem.name,
    })),
  };
}

async function findCourtByIdService(id) {
  const court = await courtRepositories.findByIdCourtRepository(id);
  return court;
}

export default {
  createCourtService,
  findAllCourtsService,
  findCourtByIdService,
};
