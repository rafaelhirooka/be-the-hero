import React from 'react';
import './global.css';
import Routes from './routes';

 // JSX (JavaScript XML) (Quando HTML ta integrado dentro do JS)
 // Componente é uma função que retorna HTML
 // Propriedades são como atributos do HTML
 // Estado: toda vez a variavel é alterado, renderiza novamente na dom

function App() {
  return (
    <Routes />
  );
}

export default App;

/*
    useState retorna um array
    0: valor da variavel
    1: função para alterar o valor
  */
//  let [counter, setCounter] = useState(0);

//  function increment() {
//    // Um variavel de estado é imutável (questão de performace)
//    // O que é feito então é que nós temos que substituir o valor do estado
//    setCounter(++counter);
//  }

//  return (
//    <div>
//      <Header>Contador: {counter}</Header>
//      <button onClick={increment}>Incrementar</button>
//    </div>
//  );