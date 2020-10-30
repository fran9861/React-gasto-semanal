import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";
const Presupuesto = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
  //estado de la cantidad del presupuesto
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  //función que permite leer la entra de los datos del usuario y pasarlos al estado
  const definirPreseupuesto = (e) => {
    setCantidad(parseInt(e.target.value));
  };
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // validar
    if (cantidad <= 0 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    // eliminar mensajes de error
    setError(false);

    // se edita el presupuesto
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Ingrese su presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Presupuesto"
          onChange={definirPreseupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};
Presupuesto.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarPregunta: PropTypes.func.isRequired,
};
export default Presupuesto;
