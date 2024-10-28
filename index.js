const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const conectarBD = require("./src/db/database");
const partidosRoutes = require("./src/routes/partidos.routes");

const app = express();
const PORT = process.env.PORT || 4002;
conectarBD();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Servicio de partidos funcionando correctamente");
});

app.use("/api", partidosRoutes);

app.listen(PORT, () => {
  console.log("Servicio de partidos escuchando en el puerto", PORT);
});
