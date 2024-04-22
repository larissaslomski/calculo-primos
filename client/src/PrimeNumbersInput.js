import React, {useState} from 'react';
import './styles/PrimeNumbersInput.css';


function PrimeNumbersInput() {
    const [inputValue, setInputValue] = useState('');
    const [answer, setAnswer] = useState('');
    const [time, setTime] = useState('');

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

    const getPrimeNumbersAndCalculatePerformance = async () => {
        console.log(isNegativeNumber())
        if (isNegativeNumber()) {
            setAnswer('Insira um número positivo.')
            setInputValue('')
            setTime('')
        } else {
            const start = performance.now();
            const r = await fetchData()
            setAnswer(`A quantidade de números primos até ${inputValue} é: ${r} `)
            const timeTaken = (performance.now() - start) / 1000; 
            setTime('Tempo para execução: ' + timeTaken.toFixed(2) + ' segundos.'); 
        }
        
    }

    let isNegativeNumber = () => {
        return inputValue < 0 ? true : false
    }
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <div>
                <input
                    id='inpt'
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Digite um número inteiro"
                    style={{ width: '300px', padding: '10px', marginBottom: '20px' }}
                />
                <button onClick={getPrimeNumbersAndCalculatePerformance} id='btn' style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Enviar</button>
            </div>
            <div>
                <h1 style={{ textAlign: 'center' }}>{answer}</h1>
                <h1 style={{ textAlign: 'center' }}>{time}</h1>
            </div>
        </div>
    );
}

export default PrimeNumbersInput;
