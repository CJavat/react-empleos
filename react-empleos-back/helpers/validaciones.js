const formatearFecha = (fecha) => {
  nuevaFecha = fecha.toLocaleString().split(",")[0];
  return nuevaFecha;
};

module.exports = {
  formatearFecha,
};
