import React from "react";
import './search-box.styles.css';

export const SearchBox = ({handleChange, placeHolder}) => {
    return <input type='search' className="search" onChange={handleChange} placeholder={placeHolder}/>
};