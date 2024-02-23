import reserveRepositories from "../repositories/reserve.repositories.js";

async function createReserveService({
  client,
  reservedDate,
  description,
  court,
}) {
  if (!client || !reservedDate || !description || !court) {
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
      cclient: reserveItem.client,
      reservedDate: reserveItem.reservedDate,
      description: reserveItem.description,
      court: reserveItem.court,
    })),
  };
}

async function updateReserveService(id, client, reservedDate, description) {
  if (!client && !reservedDate && !description) {
    throw new Error("Submit at least one field to update the reserve");
  }
  const reserveItem = await reserveRepositories.findReserveByIdRepository(id);
  if (!reserveItem) {
    throw new Error("Reserve not found");
  }
  await reserveRepositories.updateReserveRespository(
    id,
    client,
    reservedDate,
    description
  );
  const reserveUpdated = await reserveRepositories.findReserveByIdRepository(
    id
  );

  return { reserveUpdated, message: "Reserve updated successfully" };
}

export default {
  createReserveService,
  findAllReservesService,
  findReserveByCourtIdService,
  updateReserveService,
  findReserveByIdService,
};
