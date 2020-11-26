import React from "react";

import Card from './components/layout/Card'
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

const aluno = {
  titulo: "Situação do Aluno",
  nome: "Juca Sipó",
  nota: 9.3,
};

export default (_) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Card titulo="Exemplo de Card"></Card>
    <Aleatorio min={1} max={100} />
    <Fragmento />
    <ComParametro titulo={aluno.titulo} aluno={aluno.nome} nota={aluno.nota} />
    <Primeiro />
  </div>
);
