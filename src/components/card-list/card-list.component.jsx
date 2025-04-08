import React from "react";
import './card-list.styles.css';
 
export const CardList = (props) => {
    return <div className="card-list"> {props.monsters.map((monster, i)=><h1 key={i}>{`Hello, ${monster.name}`}</h1>)
      }</div>
}