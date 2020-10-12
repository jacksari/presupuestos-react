import React, { useState, useEffect } from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControllPresupuesto from "./components/ControllPresupuesto";



// eslint-disable-next-line no-undef

   function App() {

       //Definir presupuesto
       const [presupuesto, guardarPresupuesto] = useState(0);
       const [restante, guardarRestante] = useState(0);
       const [mostarpregunta, actualizarPregunta] = useState(true);
       const [gastos, guardarGastos] = useState([])
       const [gasto, guardarGasto] = useState({})
       const [crearGasto, guardarCrerGasto] = useState(false)

       //useEffect que actualiza el restante
       useEffect(() => {
           if(crearGasto){
               //Agrega el nuevo presupuesto
               guardarGastos([
                   ...gastos,
                   gasto
               ]);
               //Resta el nuevo presupuesto
               const presupuestoRestante = restante - gasto.cantidad;
               guardarRestante(presupuestoRestante)
               //Resetear a false
               guardarCrerGasto(false);
           }
       }, [gasto,crearGasto, gastos, restante]);

     return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
          <div className="contenido-principal contenido">
              {
                  mostarpregunta ? (
                      <Pregunta
                          guardarPresupuesto={guardarPresupuesto}
                          guardarRestante={guardarRestante}
                          actualizarPregunta={actualizarPregunta}
                      />
                  ) : (
                      <div className="row">
                          <div className="one-half column">
                              <Formulario guardarGasto={guardarGasto} guardarCrearGasto={guardarCrerGasto}/>
                          </div>
                          <div className="one-half column">
                              <Listado gastos={gastos}/>
                              <ControllPresupuesto presupuesto={presupuesto} restante={restante}/>
                          </div>
                      </div>
                  )
              }
          </div>
      </header>
    </div>
  );
}

export default App;
