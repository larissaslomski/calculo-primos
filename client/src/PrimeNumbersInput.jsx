import React, { useState } from 'react';
import HistoricoPrimos from './components/HistoricoPrimos';
import './styles/PrimeNumbersInput.css';

function PrimeNumbersInput() {
    const [inputValue, setInputValue] = useState('');
    const [answer, setAnswer] = useState('');
    const [time, setTime] = useState('');
    const [historicData, setHistoricData] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const fetchData = () => {
        return fetch(`/primes/${inputValue}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
        });
    };

    const fetchHistoric = () => {
        return fetch(`/primes/historic`)
        .then(response => response.json())
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
        });
    };

    const getHistoric = async () => {
        const historico = await fetchHistoric();
        setHistoricData(historico);
    };

    const getPrimeNumbersAndCalculatePerformance = async () => {
        console.log(isNegativeNumber())
        if (isNegativeNumber()) {
            setAnswer('Insira um número positivo.');
            setInputValue('');
            setTime('');
        } else {
            const start = performance.now();
            const r = await fetchData();
            setAnswer(`A quantidade de números primos até ${inputValue} é ${r}. `);
            const timeTaken = (performance.now() - start) / 1000;
            setTime('Tempo para execução ' + timeTaken.toFixed(2) + ' segundos.');
        }
    };

    let isNegativeNumber = () => {
        return inputValue < 0 ? true : false;
    };
    
    return (
        
        <div className='externa'>
            <div className='title'> Quantos números primos até seu número?</div>
            
            <div className='submit-form'>
                <input
                    className='input'
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Digite seu número"
                />
                <button className="btn" onClick={getPrimeNumbersAndCalculatePerformance}>Enviar</button>
                <button className="btn" onClick={getHistoric}>Ver histórico</button>
            </div>
            <div>
                <p className='text'>{answer}</p>
                <p className='text'>{time}</p>
            </div>
            {historicData && <HistoricoPrimos historico={historicData} />}
        </div>
    );
}

export default PrimeNumbersInput;

