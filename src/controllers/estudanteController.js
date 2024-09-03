const Estudante = require('../models/estudanteModel.js');

const getAllStudents = (req, res) => {
    res.json(Estudante.getAllStudents());
};

const getStudentById = (req, res) => {
    const estudante = Estudante.getStudentById(parseInt(req.params.id));
    if (estudante) {
        res.json(estudante);
    } else {
        res.status(404).json({ message: 'Estudante não encontrado' });
    }
};

const createStudent = (req, res) => {
    const estudante = Estudante.createStudent(req.body);
    res.status(201).json(estudante);
};

const updateStudent = (req, res) => {
    const estudante = Estudante.updateStudent(parseInt(req.params.id), req.body);
    if (estudante) {
        res.json(estudante);
    } else {
        res.status(404).json({ message: 'Estudante não encontrado' });
    }
};

const deleteStudent = (req, res) => {
    const estudante = Estudante.deleteStudent(parseInt(req.params.id));
    if (estudante) {
        res.json(estudante);
    } else {
        res.status(404).json({ message: 'Estudante não encontrado' });
    }
};

module.exports = { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent };