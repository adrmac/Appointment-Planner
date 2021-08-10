import React from "react";

const Tile = (props) => {
  const object = props.object;
  const list = Object.values(object);
  const render = list.map((item,i) => {
    if(i===0) {return <p className="tile-title tile">{item}</p>}
    else {return <p className="tile">{item}</p>}
  });
  return (
    <div className="tile-container">
      <p>{render}</p>
      {}
    </div>
  );
};

export default Tile;