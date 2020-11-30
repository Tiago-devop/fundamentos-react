import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Juca" idade={22} nerd={true} />
      <DiretaFilho nome="Jabiraca" idade={15} nerd={false} />
    </div>
  );
};
