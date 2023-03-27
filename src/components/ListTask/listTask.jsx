import React from "react";
import "./style.css";
import buttonImg from "../../img/Plus.svg";

function TaskList({ tasks, title, type, refTasks }){
    return(
        <div className="task-list">
            <p className="task-list__title">{title}</p>

            { tasks.map(item => <div key={item.id} className="task-list__task">{item.name}</div>)}

            { type === "text" && <input className="task-list__input" type="text" placeholder="Create task..."/> ||
              type === "select" && 
                <select className="task-list__input">
                    {refTasks.map(item => <option key={item.id} value={item.id} className="task-list__input__item">{item.name}</option>)}
                </select>}
            
            <button className="task-list__button" type="button">
                <img className="task-list__button__img" src={buttonImg}/>
                Add card
            </button>
        </div>
    )
}

export default TaskList;