//! DEPENDENCIAS.
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const app = express();
const cors = require("cors");

//! RUTAS.
const routerUsuarios = require("./routes/usuario.routes");
const routerEmpresa = require("./routes/empresa.routes");
const routerVacante = require("./routes/vacante.routes");

//! Habilitar bodyParser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//! Habilitar CORS.
app.use(cors());

//! Habilitar Carpeta Pública.
app.use(express.static("uploads"));
app.use(express.static("docs"));

// Rutas.
app.use("/api/usuarios", routerUsuarios);
app.use("/api/empresa", routerEmpresa);
app.use("/api/vacantes", routerVacante);

app.listen(process.env.BACKEND_PORT, () => {
  console.log("Servidor escuchando en el puerto: " + process.env.BACKEND_PORT);
});
