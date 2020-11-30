import React from "react";
import If from "./If";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.name}>
        Seja bem vindo <strong>{props.usuario.name}</strong>!
      </If>
    </div>
  );
};
