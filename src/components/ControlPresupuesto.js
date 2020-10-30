import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { calcularPorcentajeRestante } from "../Helper";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">presupuesto : $ {presupuesto}</div>
      <div className={calcularPorcentajeRestante(presupuesto, restante)}>
        restante : $ {restante}
      </div>
    </Fragment>
  );
};
ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
export default ControlPresupuesto;
