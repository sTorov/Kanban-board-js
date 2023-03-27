import React from "react";
import avatar from "../../img/Avatar.svg";
import "./style.css";

function Menu({ onClick, menuSvg, dropDownDisplayStyle }){
    return(
        <>
            <div className="menu" onClick={onClick}>
                <div className="menu__avatar-wrapper">
                    <img className="menu__avatar-svg" src={avatar}/>
                </div>
                <img className="menu__dropdown-arrow" src={menuSvg}/>
            </div>
            <div className="menu-dropdown" style={dropDownDisplayStyle}>
                <div className="menu-dropdown__arrow-top"></div>
                <div className="menu-dropdown__item">
                    <span className="menu-dropdown__item__text">Profile</span>
                </div>
                <div className="menu-dropdown__item">
                    <span className="menu-dropdown__item__text">Log Out</span>
                </div>
            </div>
        </>
    )
}

export default Menu;