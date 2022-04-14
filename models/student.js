const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const studentSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  turma: {
    type: ObjectId,
    required: true
  },
  responsavel: {
    type: ObjectId,
    required: true
  },
  telefone: {
    type: String,
    default: null
  },
  senha: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);