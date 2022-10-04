import './App.css';
import React, { useState } from 'react';

export default function App() {
const [numero, setNumero] = useState(0)

function aumentar () {
    setNumero( numero + 1)
}

function diminuir () {
    setNumero( numero - 1)
}
return (
    <div>  <h1>contador</h1>
    <p>{ numero }</p>
    <button  onClick={aumentar} >mais</button>
    <button onClick={diminuir}>menos</button>
    </div>
);
}


