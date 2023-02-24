require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routerUsuarios = require("./routes/usuario.routes");
const db = require("./config/db");
const app = express();

// Habilitar bodyParser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas.
app.use("/api/usuarios", routerUsuarios);

app.listen(process.env.BACKEND_PORT, () => {
  console.log("Servidor escuchando en el puerto: " + process.env.BACKEND_PORT);
});
