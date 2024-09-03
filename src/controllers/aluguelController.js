const Aluguel = require("../models/aluguelModel.js");
const Livro = require("../models/livroModel.js");
const Estudante = require("../models/estudanteModel.js");

const getAllRentals = (req, res) => {
  res.json(Aluguel.getAllRentals());
};

const getRentalById = (req, res) => {
  const aluguel = Aluguel.getRentalById(parseInt(req.params.id));
  if (aluguel) {
    res.json(aluguel);
  } else {
    res.status(404).json({ message: "Aluguel não encontrado" });
  }
};

const createRental = (req, res) => {
  const { livro_id, estudante_id } = req.body;
  const livro = Livro.getBookById(livro_id);
  const estudante = Estudante.getStudentById(estudante_id);
  if (livro && estudante) {
    const aluguel = Aluguel.createRental(req.body);
    res.status(201).json(aluguel);
  } else {
    res.status(400).json({ message: "ID do estudante ou livro inválido" });
  }
};

const updateRental = (req, res) => {
  const aluguel = Aluguel.updateRental(parseInt(req.params.id), req.body);
  if (aluguel) {
    res.json(aluguel);
  } else {
    res.status(404).json({ message: "Aluguel não encontrado" });
  }
};

const deleteRental = (req, res) => {
  const aluguel = Aluguel.deleteRental(parseInt(req.params.id));
  if (aluguel) {
    res.json(aluguel);
  } else {
    res.status(404).json({ message: "Aluguel não encontrado" });
  }
};

module.exports = {
  getAllRentals,
  getRentalById,
  createRental,
  updateRental,
  deleteRental,
};
