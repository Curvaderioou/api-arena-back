import reserveRepositories from "../repositories/reserve.repositories.js";

async function createReserveService({
  client,
  reservedDate,
  description,
  court,
}) {
  try {
    if (!client || !reservedDate || !court) {
      throw new Error("Submit all fields for registration");
    }

    const { id } = await reserveRepositories.createReserveRepository(
      client,
      reservedDate,
      description,
      court
    );
    return {
      message: "Reserve created successfully!",
      reserve: { id, client, reservedDate, description, court },
    };
  } catch (e) {
    return e.message;
  }
}

async function existingReserveService(court, reservedDate) {
  const response = await reserveRepositories.existingReserveRepository(
    court,
    reservedDate
  );
  return response;
}

async function findAllReservesService() {
  const reserve = await reserveRepositories.findAllReservesRepository();
  return {
    results: reserve.map((reserveItem) => ({
      id: reserveItem.id,
      client: reserveItem.client,
      reservedDate: reserveItem.reservedDate,
      description: reserveItem.description,
      court: reserveItem.court,
    })),
  };
}

async function findAllReservesOnDateService(date) {
  const reserve = await reserveRepositories.findAllReservesOnDateRepository(
    date
  );
  return {
    results: reserve.map((reserveItem) => ({
      id: reserveItem.id,
      client: reserveItem.client,
      reservedDate: reserveItem.reservedDate,
      description: reserveItem.description,
      court: reserveItem.court,
    })),
  };
}

async function findReserveByIdService(id) {
  const reserve = await reserveRepositories.findReserveByIdRepository(id);
  return {
    data: {
      id: reserve.id,
      client: reserve.client,
      reservedDate: reserve.reservedDate,
      description: reserve.description,
      court: reserve.court,
    },
  };
}

async function findReserveByCourtIdService(id) {
  const reserve = await reserveRepositories.findReserveByCourtIdRepository(id);
  return {
    reservesByCourt: reserve.map((reserveItem) => ({
      id: reserveItem._id,
      client: reserveItem.client,
      reservedDate: reserveItem.reservedDate,
      description: reserveItem.description,
      court: reserveItem.court,
    })),
  };
}

async function updateReserveService(id, client) {
  const reserveItem = await reserveRepositories.findReserveByIdRepository(id);
  if (!reserveItem) {
    throw new Error("Reserve not found");
  }
  await reserveRepositories.updateReserveRespository(id, client);
  const reserveUpdated = await reserveRepositories.findReserveByIdRepository(
    id
  );

  // console.log(reserveItem);
  // console.log(reserveUpdated);

  return { reserveUpdated, message: "Reserve updated successfully" };
}

async function deleteReserveService(id) {
  const reserveItem = await reserveRepositories.findReserveByIdRepository(id);
  if (!reserveItem) throw new Error("Reserve not found");
  await reserveRepositories.deleteReserveRepository(id);
}

export default {
  createReserveService,
  findAllReservesService,
  findReserveByCourtIdService,
  updateReserveService,
  findReserveByIdService,
  deleteReserveService,
  existingReserveService,
  findAllReservesOnDateService,
};
