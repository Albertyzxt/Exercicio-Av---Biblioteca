let alugueis = [];
let currentId = 1;

const getAllRentals = () => alugueis;
const getRentalById = (id) => alugueis.find(aluguel => aluguel.id === id);
const createRental = (aluguel) => {
    aluguel.id = currentId++;
    alugueis.push(aluguel);
    return aluguel;
};
const updateRental = (id, updatedRental) => {
    const index = alugueis.findIndex(aluguel => aluguel.id === id);
    if (index !== -1) {
        alugueis[index] = { id, ...updatedRental };
        return alugueis[index];
    }
    return null;
};
const deleteRental = (id) => {
    const index = alugueis.findIndex(aluguel => aluguel.id === id);
    if (index !== -1) {
        return alugueis.splice(index, 1)[0];
    }
    return null;
};

module.exports = { getAllRentals, getRentalById, createRental, updateRental, deleteRental };