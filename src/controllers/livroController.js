const Livro = require("../models/livroModel.js");

const getAllBooks = (req, res) => {
  res.json(Livro.getAllBooks());
};

const getBookById = (req, res) => {
  const livro = Livro.getBookById(parseInt(req.params.id));
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ message: "Livro não encontrado" });
  }
};

const createBook = (req, res) => {
  const livro = Livro.createBook(req.body);
  res.status(201).json(livro);
};

const updateBook = (req, res) => {
  const livro = Livro.updateBook(parseInt(req.params.id), req.body);
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ message: "Livro não encontrado" });
  }
};

const deleteBook = (req, res) => {
  const livro = Livro.deleteBook(parseInt(req.params.id));
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ message: "Livro não encontrado" });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
