import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  // metodo que se ejecuta cuando el usuario crea un gasto
  const onSubmitGasto = (e) => {
    e.preventDefault();
    // validar datos
    if (nombre.trim() === "" || isNaN(cantidad) || cantidad <= 0) {
      setError(true);
      return;
    }
    // eliminó las alertas
    setError(false);
    // construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    //pasar el gasto al componente
    guardarGasto(gasto);
    guardarCrearGasto(true);
    // resetar el form
    setNombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={onSubmitGasto}>
      <h2> Agrega tus gastos</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o el presupuesto es incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre del Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Comida"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Nombre del Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 2000"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      ></input>
    </form>
  );
};
Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired,
};
export default Formulario;
