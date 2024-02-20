import reserveService from "../services/reserve.services.js";

async function createReserveController(req, res) {
  const { client, reservedDate, description, court } = req.body;
  try {
    const reserve = await reserveService.createReserveService({
      client,
      reservedDate,
      description,
      court,
    });
    return res.status(201).send(reserve);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

async function findAllReservesController(req, res) {
  try {
    const reserve = await reserveService.findAllReservesService();
    return res.send(reserve);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

async function findReserveByIdController(req, res) {
  try {
    const id = req.params.id;
    const reserve = await reserveService.findReserveByIdService(id);
    return res.send(reserve);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

async function findReserveByCourtIdController(req, res) {
  const id = req.params.id;
  try {
    const reserve = await reserveService.findReserveByCourtIdService(id);
    return res.send(reserve);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

async function updateReserveController(req, res) {
  const { client, reservedDate, description } = req.body;
  const { id } = req.params;

  try {
    const response = await reserveService.updateReserveService(
      id,
      client,
      reservedDate,
      description
    );
    return res.send(response);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

export default {
  createReserveController,
  findAllReservesController,
  findReserveByCourtIdController,
  updateReserveController,
  findReserveByIdController,
};
