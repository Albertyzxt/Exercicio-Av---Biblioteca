let estudantes = [];
let currentId = 1;

const getAllStudents = () => estudantes;
const getStudentById = (id) =>
  estudantes.find((estudante) => estudante.id === id);
const createStudent = (estudante) => {
  estudante.id = currentId++;
  estudantes.push(estudante);
  return estudante;
};
const updateStudent = (id, updatedStudent) => {
  const index = estudantes.findIndex((estudante) => estudante.id === id);
  if (index !== -1) {
    estudantes[index] = { id, ...updatedStudent };
    return estudantes[index];
  }
  return null;
};
const deleteStudent = (id) => {
  const index = estudantes.findIndex((estudante) => estudante.id === id);
  if (index !== -1) {
    return estudantes.splice(index, 1)[0];
  }
  return null;
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
