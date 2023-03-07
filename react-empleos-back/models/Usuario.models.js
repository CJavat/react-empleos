const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const usuarioSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    trim: true,
  },
  nombre: {
    type: String,
    lowercase: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  telefono: {
    type: String,
    trim: true,
  },
  rol: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
  },
  cv: {
    type: String,
  },
  url: String,
  token: String,
  confirmado: {
    type: Number,
    default: 0,
  },
  //TODO: HACER UN CAMPO PARA PODER INDICAR SI LOS RECLUTADORES YA TIENEN AL MENOS UNA EMPRESA ASOCIADA
});

// Método para hashear los passwords.
usuarioSchema.pre("save", async function (next) {
  // Si el password ya esta hasheado...
  if (!this.isModified("password")) {
    return next();
  }

  // Si no esta hasheado.
  const hash = await bcrypt.hash(this.password, 12);
  this.password = hash;

  next();
});

module.exports = mongoose.model("Usuario", usuarioSchema);
