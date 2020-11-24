import React from "react";
/*
	<React.Fragment /> remove a div do seu escopo, ou pode ser
	usado com <></> porem n pode ser adicionado atributos.
*/

export default function Fragmento(props) {
  return (
    <React.Fragment>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </React.Fragment>
  );
}
