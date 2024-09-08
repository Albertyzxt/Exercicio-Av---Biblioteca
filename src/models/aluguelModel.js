let alugueis = [];
let currentId = 1;

const getAllRentals = () => alugueis;
const getRentalById = (id) => alugueis.find((aluguel) => aluguel.id === id);
const createRental = (aluguel) => {
    aluguel = {
      id: currentId++,
     livro_id: aluguel.livro_id,
     estudante_id: aluguel.estudante_id,
     data_aluguel: new Date(aluguel.data_aluguel).toISOString(),
     data_devolucao: aluguel.data_devolucao ? new Date(aluguel.data_devolucao).toISOString() : null
    };
  alugueis.push(aluguel);
  return aluguel;
};
const updateRental = (id, updatedRental) => {
  const index = alugueis.findIndex((aluguel) => aluguel.id === id);
  if (index !== -1) {
    alugueis[index] = { id, ...updatedRental };
    return alugueis[index];
  }
  return;
};
const deleteRental = (id) => {
  const index = alugueis.findIndex((aluguel) => aluguel.id === id);
  if (index !== -1) {
    return alugueis.splice(index, 1)[0];
  }
  return;
};

module.exports = {
  getAllRentals,
  getRentalById,
  createRental,
  updateRental,
  deleteRental,
};
