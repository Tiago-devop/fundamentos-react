import "./Card.css";
import React from "react";

export default (props) => {
  const cardStyled = {
    backgroundColor: props.color || "#F00",
    borderColor: props.color || "#F00",
  };

  return (
    <div className="Card" style={cardStyled}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
