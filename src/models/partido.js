const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partidoEsquema = new Schema({
  equipo1: {
    type: String,
    required: true,
  },
  equipo2: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
});

const Partido = mongoose.model("Partido", partidoEsquema);

module.exports = Partido;
