const express = require("express");
const Partidos = require("../models/partido");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Servicio API funcionando correctamente");
});

router.post("/registroPartidos", async (req, res) => {
  try {
    const { equipo1, equipo2, fecha, hora } = req.body;
    const nuevoPartido = new Partidos({ equipo1, equipo2, fecha, hora });
    const partidoGuardado = await nuevoPartido.save();
    res.status(201).json(partidoGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al registrar un partido", error });
  }
});

router.get("/partidos", async (req, res) => {
  try {
    const partidos = await Partidos.find({});
    res.status(200).json(partidos);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al obtener la lista de partidos", error });
  }
});

module.exports = router;
