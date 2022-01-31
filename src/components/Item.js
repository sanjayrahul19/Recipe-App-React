import React from "react";
import style from "./Item.module.css";
const Item = ({ item: { name, original } }) => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h5>{name}</h5>
        <small className={style.p}> {original}</small>
      </div>
    </div>
  );
};

export default Item;
