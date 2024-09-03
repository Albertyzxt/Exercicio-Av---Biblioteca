let livros = [];
let currentId = 1;

const getAllBooks = () => livros;
const getBookById = (id) => livros.find((livro) => livro.id === id);
const createBook = (livro) => {
  livro.id = currentId++;
  livros.push(livro);
  return livro;
};
const updateBook = (id, updatedBook) => {
  const index = livros.findIndex((livro) => livro.id === id);
  if (index !== -1) {
    livros[index] = { id, ...updatedBook };
    return livros[index];
  }
  return null;
};
const deleteBook = (id) => {
  const index = livros.findIndex((livro) => livro.id === id);
  if (index !== -1) {
    return livros.splice(index, 1)[0];
  }
  return null;
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
