import archiveRepositories from "../repositories/archive.repositories.js";

async function createArchiveService({ client, reservedDate, court }) {
  try {
    if (!client || !reservedDate || !court) {
      throw new Error("Submit all fields for registration");
    }

    const { idArchive } = await archiveRepositories.createArchiveRepository(
      client,
      reservedDate,
      court
    );
    return {
      message: "Reserve created successfully!",
      reserve: { idArchive, client, reservedDate, court },
    };
  } catch (e) {
    return e.message;
  }
}

async function findAllArchivesService() {
  const archive = await archiveRepositories.findAllArchivesRepository();
  return {
    results: archive.map((archiveItem) => ({
      id: archiveItem.id,
      client: archiveItem.client,
      reservedDate: archiveItem.reservedDate,
      court: archiveItem.court,
    })),
  };
}

export default {
  createArchiveService,
  findAllArchivesService,
};
