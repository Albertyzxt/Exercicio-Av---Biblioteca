const express = require('express');
const router = express.Router();
const EstudanteController = require('../controllers/estudanteController.js');

router.get('/', EstudanteController.getAllStudents);
router.get('/:id', EstudanteController.getStudentById);
router.post('/', EstudanteController.createStudent);
router.put('/:id', EstudanteController.updateStudent);
router.delete('/:id', EstudanteController.deleteStudent);

module.exports = router;