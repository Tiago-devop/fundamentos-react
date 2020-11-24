import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

const aluno = {
  titulo: "Situação do Aluno",
  nome: "Juca Sipó",
  nota: 9.3,
};

export default (_) => (
  <div id="app">
    <h1>Fundamentos React (Arrow _)</h1>
    <Fragmento />
    <ComParametro titulo={aluno.titulo} aluno={aluno.nome} nota={aluno.nota} />
    <Primeiro />
  </div>
);
