import React, { useState } from "react";
import Menu from "../Menu/menu";
import "./style.css";
import arrowDown from "../../img/ArrowDown.svg";
import arrowUp from "../../img/ArrowUp.svg";

function Header({ title }){
    const [ menuClicked, setMenuClicked ] = useState(false);
    const [ menuSvg, setMenuSvg ] = useState(arrowDown);
    const [ dropDownDisplayStyle, setDropDownDisplayStyle ] = useState({ display: "none" })
    
    function onHeaderMenuClick(){
        setMenuSvg(menuClicked ? arrowDown : arrowUp);
        setDropDownDisplayStyle({ display: menuClicked ? "none" : "block" })
        setMenuClicked(!menuClicked);
      }

    return(
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <Menu onClick={onHeaderMenuClick} 
                  menuSvg={menuSvg}
                  dropDownDisplayStyle={dropDownDisplayStyle}/>
        </header>
    )
}

export default Header;