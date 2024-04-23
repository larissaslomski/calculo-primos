import React, { useState } from 'react';
import PrimesHitoric from './components/PrimesHitoric.js';
import './styles/PrimeNumbersInput.css';

function PrimeNumbersInput() {
    const [inputValue, setInputValue] = useState('');
    const [answer, setAnswer] = useState('');
    const [time, setTime] = useState('');
    const [historicData, setHistoricData] = useState('');

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
        if (isInputValid()) {
            const start = performance.now();
            const response = await fetchData();
            setAnswer(`A quantidade de números primos até ${inputValue} é ${response}. `);
            const timeTaken = (performance.now() - start) / 1000;
            setTime('Tempo para execução ' + timeTaken.toFixed(2) + ' segundos.');
            setHistoricData('')
        }
    };

    let isInputValid = () => {
        if (!inputValue) {
            setAnswer('Insira um número positivo.');
            setInputValue('');
            setTime('');
            setHistoricData('')
            return false
        }

        if (isNegativeNumber()) {
            setAnswer('Insira um número positivo.');
            setInputValue('');
            setTime('');
            setHistoricData('')
            return false
        } 

        return true
    }

    let isNegativeNumber = () => {
        return inputValue < 0;
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
            {historicData && <PrimesHitoric historico={historicData} />}
        </div>
    );
}

export default PrimeNumbersInput;
