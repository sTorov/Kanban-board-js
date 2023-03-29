import React from "react";
import "./style.css";

const Avatar = ({photo}) =>
    <div className="menu__avatar-wrapper">
        <img className="menu__avatar-svg" src={photo} alt="avatar"/>
    </div>

export default Avatar;