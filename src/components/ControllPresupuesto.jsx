import React,{Fragment} from 'react';
import { resivarPresupuesto } from '../helpers'
import PropTypes from 'prop-types';

function ControllPresupuesto({presupuesto, restante}) {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {presupuesto}
            </div>
            <div className={resivarPresupuesto(presupuesto,restante)}>
                Restante: {restante}
            </div>
        </Fragment>
    );
}

ControllPresupuesto.prototype = {
    presupuesto: PropTypes.number.isRequired,
    reatante: PropTypes.number.isRequired
}

export default ControllPresupuesto;