import React from "react";

const Circle = ({ cell }) => {
  let color = "white";
  if (cell === 1) {
    color = "yellow";
  } else if (cell === 2) {
    color = "red";
  }

  var style = {
    backgroundColor: color
  };

  return <div className="circle" style={style} />;
};

export default Circle;
