import reserveService from "../services/reserve.services.js";

async function createReserveController(req, res) {
  const { client, reservedDate, description, court } = req.body;

  const existingReserveVar = await reserveService.existingReserveService(
    court,
    reservedDate
  );
  if (existingReserveVar) {
    return res
      .status(500)
      .send({ message: "Já existe uma reserva nesse dia e horário." });
  }

  try {
    const reserve = await reserveService.createReserveService({
      client,
      reservedDate,
      description,
      court,
    });
    return res.status(201).send(reserve);
  } catch (e) {
    return res.status(500).send(e.message);
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

async function findAllReservesOnDateController(req, res) {
  const { date } = req.query;
  try {
    const reserve = await reserveService.findAllReservesOnDateService(date);
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
  const { client } = req.body;
  const { id } = req.params;

  try {
    const response = await reserveService.updateReserveService(id, client);
    return res.send(response);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

async function deleteReserveController(req, res) {
  const { id } = req.params;
  try {
    const response = await reserveService.deleteReserveService(id);
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
  deleteReserveController,
  findAllReservesOnDateController,
};
