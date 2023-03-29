import React from "react";
import "./style.css";

const DropdownItem = ({value}) => 
    <div className="menu-dropdown__item">
        <span className="menu-dropdown__item__text">{value}</span>
    </div>

export default DropdownItem;