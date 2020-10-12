import React from 'react';
import PropTypes from 'prop-types';

function Gasto({gasto}) {
    return (
        <li className="gasto">
            <p>
                {gasto.nombre}
                <span className="gasto">$ {gasto.cantidad}</span>
            </p>
        </li>
    );
}

Gasto.prototype = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;