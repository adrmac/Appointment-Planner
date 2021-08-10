import React from "react";
import Tile from '../tile/Tile'

const TileList = (props) => {
  const variable = "I'm here!"
  const objectsArr = props.objects;
  const tiles = objectsArr.map((item, i)=>
    <Tile key={i} object={item} />
  );
  return (
    <div>
      {tiles}
    </div>
  );
};

export default TileList;