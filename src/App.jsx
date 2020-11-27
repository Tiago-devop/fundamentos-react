import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório">
        <Aleatorio min={1} max={100} />
      </Card>
      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parâmetro">
        <ComParametro titulo="Situação do Aluno" aluno="Juca Sipó" nota={9.3} />
      </Card>
      <Card titulo="#01 - Fragmento">
        <Primeiro />
      </Card>
    </div>
  </div>
);
