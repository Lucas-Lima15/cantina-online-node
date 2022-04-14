const express = require("express");
const { route } = require("express/lib/application");
const mongoose = require("mongoose");
const { findByIdAndRemove } = require("../models/student");
const Student = require("../models/student");

const router = express.Router();

router.get("/", async (req, res) => {
  const students = await Student.find();
  return res.json(students);
});

router.post("/", async (req, res) => {
  const student = await Student.create(req.body);
  return res.json({ message: "Estudante criado" });
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
