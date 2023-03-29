import React from "react";
import Avatar from "../Avatar/avatar";
import Dropdown from "../Dropdown/dropdown";
import DropdownItem from "../DropdownItem/dropdownItem";
import photo from "../../img/Avatar.svg";
import "./style.css";

function Menu({ onClick, menuSvg, dropDownDisplayStyle }){
    return(
        <>
            <div className="menu" onClick={onClick}>
                <Avatar photo={photo}/>
                <img className="menu__dropdown-arrow" src={menuSvg} alt="dropdown-arrow"/>
            </div>
            <Dropdown display={dropDownDisplayStyle}>
                <DropdownItem value="Profile"/>
                <DropdownItem value="Log out"/>
            </Dropdown>
        </>
    )
}

export default Menu;