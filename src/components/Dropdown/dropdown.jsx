import React from "react";
import "./style.css";

const Dropdown = ({children, display}) => 
    <div className="menu-dropdown" style={display}>
        <div className="menu-dropdown__arrow-top"></div>
        {children}
    </div>

export default Dropdown;