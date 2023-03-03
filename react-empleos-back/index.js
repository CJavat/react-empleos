require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routerUsuarios = require("./routes/usuario.routes");
const db = require("./config/db");
const app = express();
const cors = require("cors");

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

app.listen(process.env.BACKEND_PORT, () => {
  console.log("Servidor escuchando en el puerto: " + process.env.BACKEND_PORT);
});
