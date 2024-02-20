import courtService from "../services/court.services.js";

async function createCourtController(req, res) {
  const { name } = req.body;
  try {
    const court = await courtService.createCourtService({
      name,
    });
    return res.status(201).send(court);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

async function findAllCourtsController(req, res) {
  try {
    const court = await courtService.findAllCourtsService();
    return res.send(court);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

export default { createCourtController, findAllCourtsController };
