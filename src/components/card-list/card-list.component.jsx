import React from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css';
 
export const CardList = (props) => {
    // let bt = []
    //     props.monsters.forEach((monster, i)=> {
    //     if(monster.name.toLowerCase().includes(props.searchField.toLowerCase())) {
    //         bt.push(monster)
    //     }
        
    // })
    
    return <div className="card-list"> {props.monsters.map((monster, i)=> 
    <Card key={i} monster={monster}/>)}
    </div>
}


