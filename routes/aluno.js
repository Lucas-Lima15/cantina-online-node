const express = require('express');

const alunoController = require('../controllers/aluno');

const router = express.Router();

router.get('/', alunoController.getAlunos);

router.post('/', alunoController.postAluno);

module.exports = router;