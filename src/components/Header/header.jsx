import React from "react";
import Menu from "../Menu/menu";
import "./style.css";

function Header({ title, onClick, menuSvg, dropDownDisplayStyle }){
    return(
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <Menu onClick={onClick} 
                  menuSvg={menuSvg} 
                  dropDownDisplayStyle={dropDownDisplayStyle}/>
        </header>
    )
}

export default Header;