import React, {useState} from 'react'


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
        const start = performance.now();
        const r = await fetchData()
        setAnswer(r)
        setInputValue('')
        const timeTaken = performance.now() - start;
        setTime('tempo em ms para execução: ' + timeTaken)
    }
    
    return (
        <div>
            <div>
                <input
                id='inpt'
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Digite um número inteiro"
                />
                <button onClick={getPrimeNumbersAndCalculatePerformance} id='btn'>Enviar</button>
            </div>
        <div>
            <h1>{answer}</h1>
            <h1>{time}</h1>
        </div>
        </div>
    );
}

export default PrimeNumbersInput;
