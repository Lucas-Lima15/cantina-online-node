const express = require("express");
const mongoose = require("mongoose");
const Student = require("../models/student");

const router = express.Router();

const ObjectId = mongoose.Types.ObjectId;

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    return res.json(students);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 500, message: "Falha no servidor" });
  }
});

router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    return res.json({ message: "Estudante criado" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 500, message: "Falha no servidor" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const studentExist = await Student.exists({
    _id: mongoose.Types.ObjectId(id),
  });

  if (!Boolean(studentExist))
    return res.json({ message: "Estudante não existe" });

  const student = await Student.find({ _id: mongoose.Types.ObjectId(id) });

  return res.json(student);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const studentExist = await Student.exists({
    _id: mongoose.Types.ObjectId(id),
  });

  if (!Boolean(studentExist))
    return res.json({ message: "Estudante não existe" });

  const student = await Student.findByIdAndUpdate(
    mongoose.Types.ObjectId(id),
    req.body,
    { new: true }
  );

  return res.json(student);
});

router.delete("/:id", async (req, res) => {
  const id = req.params;
  const studentExist = await Student.exists({
    _id: mongoose.Types.ObjectId(id),
  });

  if (!Boolean(studentExist)) res.json({ message: "Estudante não existe" });

  const student = await Student.findByIdAndRemove(mongoose.Types.ObjectId(id));

  return res.json({ message: "Estudante excluido" });
});

router.post("/search", async (req, res) => {
  const data = req.body;
  const student = await Student.find(data);

  return Boolean(student)
    ? res.json(student)
    : res.json({ message: "Nenhum estudante encontrado" });
});

module.exports = router;
