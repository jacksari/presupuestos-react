import React, { useState} from 'react';
import Error from "./Error";
import shortid from 'shortid';
import PropTypes from 'prop-types';

function Formulario({guardarGasto, guardarCrearGasto}) {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState('');
    const [error, guardarError] = useState(false)

    //Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();
        //Validar
        if(parseInt(cantidad) < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return ;
        }
        guardarError(false)
        //Construir el gasto
        const cant = parseInt(cantidad);
        const gasto = {
            nombre,
            cantidad: cant,
            id: shortid.generate()
        }
        //Pasar el componente al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true)
        //Resetear form
        guardarCantidad('');
        guardarNombre('');
    }


    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>
            {
                error ? <Error mensaje="Ambos campos son obligatorio o presupuesto incorrecto"/> : null
            }
            <div className="campo">
                <label>Nombre gasto</label>
                <input type="text"
                       name="nombre"
                       id="nombre"
                       className="u-full-width"
                       placeholder="Ej. Transporte"
                       value={nombre}

                       onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input type="number"
                       name="cantidad"
                       id="cantidad"
                       className="u-full-width"
                       placeholder="Ej. 300"
                       value={cantidad}

                       onChange={e => {
                           guardarCantidad(e.target.value);
                           //console.log('log', cantidad)
                       }}

                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar gasto"/>
        </form>
    );
}

Formulario.prototype = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;