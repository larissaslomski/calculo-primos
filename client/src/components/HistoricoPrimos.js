import React from 'react';

function HistoricoPrimos({ historico }) {
    return (
        <div className="historico-container">
            <h2>Histórico de Consultas:</h2>
            <ul>
                {Object.entries(historico).map(([numero, quantidadePrimos], index) => (
                    <li key={index}>
                        Número: {numero}, Quantidade de primos: {quantidadePrimos}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HistoricoPrimos;