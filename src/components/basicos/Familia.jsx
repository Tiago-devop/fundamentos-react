import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
  return (
    <div>
      <FamiliaMembro name="Luíza" surname="Ramos" />
      <FamiliaMembro name="Tiago" surname={props.surname} />
      <FamiliaMembro name="Rafael" {...props} />
      <FamiliaMembro name="Natalia" surname="Vasconcelos" />
    </div>
  );
};
