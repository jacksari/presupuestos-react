import React, { Fragment, useState } from 'react';
import Error from "./Error";
import PropTypes from "prop-types";
import Formulario from "./Formulario";


function Pregunta({guardarPresupuesto, guardarRestante, actualizarPregunta}) {
    //Definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
        //Validar
        if(cantidad < 1 || isNaN( cantidad ) ){
            guardarError(true);
            return;
        }
        //Si pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {
                error ? <Error mensaje="El presupuesto es incorrecto"/> : null
            }
            <form onSubmit={agregarPresupuesto}>
                <input type="number"
                       className="u-full-width"
                       placeholder="Coloca tu presupuesto"
                       onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input type="submit" className="button-primary u-full-width" value="Definir presupuesto"/>
            </form>
        </Fragment>
    );
}

Formulario.prototype = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;