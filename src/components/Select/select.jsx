import React from "react";
import "./style.css";

function Select({ onChange, children, mark }){
    return(
        <select defaultValue={""} className="task-list__input" onChange={(e) => onChange(e, mark)}>
            <option value={""} className="default-option"></option>
            {children}
        </select>
    )
}

export default Select;