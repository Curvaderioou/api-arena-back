import archiveService from "../services/archive.service.js";

async function createArchiveController(req, res) {
  const { client, reservedDate, court } = req.body;
  try {
    const ArchivedReserve = await archiveService.createArchiveService({
      client,
      reservedDate,
      court,
    });
    return res.status(201).send(ArchivedReserve);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

async function findAllArchivesController(req, res) {
  try {
    const archives = await archiveService.findAllArchivesService();
    return res.send(archives);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

export default {
  createArchiveController,
  findAllArchivesController,
};
