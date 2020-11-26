import React from "react";

export default function Aleatorio(props) {
  const { min, max } = props;

  const aleatorio = Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
      <p>
        numero aleatorio entre {min} e {max} é = {aleatorio}
      </p>
    </div>
  );
}
