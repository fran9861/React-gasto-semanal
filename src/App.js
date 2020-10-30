import React, { useState, useEffect } from "react";
import Presupuesto from "./components/Presupuesto";
import Formulario from "./components/Formulario";
import ListadoGasto from "./components/ListadoGasto";
import ControlPresupuesto from "./components/ControlPresupuesto";
function App() {
  // se define el state del presupuesto y el restante
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      // agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);
      // resta al presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      guardarCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Presupuesto semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {mostrarPregunta ? (
          <Presupuesto
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setMostrarPregunta={setMostrarPregunta}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Formulario
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
            </div>
            <div className="one-half column">
              <ListadoGasto gastos={gastos} />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
