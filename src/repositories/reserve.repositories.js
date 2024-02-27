import Reserve from "../models/Reserve.js";

async function createReserveRepository(
  client,
  reservedDate,
  description,
  court
) {
  return Reserve.create({ client, reservedDate, description, court });
}

async function existingReserveRepository(court, reservedDate) {
  const existingReserve = await Reserve.findOne({ court, reservedDate });
  return !!existingReserve;
}

function findAllReservesRepository() {
  return Reserve.find().sort({ reservedDate: 1 });
}

function findAllReservesOnDateRepository(date) {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  startOfDay.setDate(startOfDay.getDate() + 1);

  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);
  endOfDay.setDate(endOfDay.getDate() + 1);

  const response = Reserve.find({
    reservedDate: {
      $gte: startOfDay,
      $lte: endOfDay,
    },
  }).sort({ reservedDate: 1 });

  return response;
}

function findReserveByCourtIdRepository(id) {
  return Reserve.find({ court: id })
    .sort({ reservedDate: 1 })
    .populate("court");
}

function findReserveByIdRepository(id) {
  return Reserve.findById(id).populate("court");
}

async function updateReserveRespository(id, client, reservedDate, description) {
  try {
    const updatedReserve = await Reserve.findOneAndUpdate(
      {
        _id: id,
      },
      {
        client,
        reservedDate,
        description,
      },
      { new: true }
    );
    if (!updatedReserve) {
      throw new Error("Reserva não encontrada");
    }
    return updatedReserve;
  } catch (e) {
    throw new Error("Erro ao atualizar a reserva: " + e.message);
  }
}

async function deleteReserveRepository(id) {
  return Reserve.findOneAndDelete({ _id: id });
}

export default {
  createReserveRepository,
  findAllReservesRepository,
  findReserveByCourtIdRepository,
  findReserveByIdRepository,
  updateReserveRespository,
  deleteReserveRepository,
  existingReserveRepository,
  findAllReservesOnDateRepository,
};
