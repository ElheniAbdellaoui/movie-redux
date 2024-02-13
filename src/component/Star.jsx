import React from "react";

const Star = ({ rate, handlerating }) => {
  function stars(Rating) {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Rating) {
        star.push(
          <span
            onClick={() => handlerating(i)}
            style={{ color: "yellow", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else {
        star.push(
          <span
            onClick={() => handlerating(i)}
            style={{ color: "black", cursor: "pointer" }}
          >
            ★
          </span>
        );
      }
    }
    return star;
  }
  return <div>{stars(rate)}</div>;
};

export default Star;
