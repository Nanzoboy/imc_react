

import React, { useState } from 'react';

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setIMC] = useState(0);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));

    // Definindo IMC
    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do Peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setClassificacao('Peso Normal');
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
      setClassificacao('Obesidade Grau 1');
    } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
      setClassificacao('Obesidade Grau 2');
    } else {
      setClassificacao('Obesidade Grau 3');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm): </label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div>
        <label>Peso (kg): </label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      {imc > 0 && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;

