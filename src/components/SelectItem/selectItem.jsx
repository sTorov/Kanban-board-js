import React from "react";
import "./style.css";

const SelectItem = ({item}) =>
    <option value={item.id} className="task-list__input__item">
            {item.name}
    </option>

export default SelectItem;