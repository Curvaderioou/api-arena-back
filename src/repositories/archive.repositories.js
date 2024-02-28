import Archive from "../models/Archive.js";

async function createArchiveRepository(client, reservedDate, court) {
  return Archive.create({ client, reservedDate, court });
}

function findAllArchivesRepository() {
  return Archive.find().sort({ _id: -1 });
}

export default { createArchiveRepository, findAllArchivesRepository };
