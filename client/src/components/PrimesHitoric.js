import React from 'react';
import '../styles/PrimesHistoric.css';

function PrimesHistoric({ historico }) {
    return (
        <div>
        <h2 className='historic-title'>Histórico de Consultas:</h2>
        <div className="historic-container">
            <ul className="lista">
                {Object.entries(historico).map(([numero, quantidadePrimos], index) => (
                    <li className= 'historic-list'>
                        Número: {numero}, quantidade de primos: {quantidadePrimos}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
}

export default PrimesHistoric;