import React from "react";
import "./style.css";
import Submit from "../Submit/submit";
import Select from "../Select/select";

class TaskList extends React.Component{
    render(){
        const { tasks, title, type, refTasks, onClick, onChange, mark, inputRef } = this.props;

        return(
            <div className="task-list">
                <p className="task-list__title">{title}</p>
                
                { tasks.map(item => <div key={item.id} className="task-list__task">{item.name}</div>)}

                { type === "select" 
                  ? 
                  <Select mark={mark} onChange={onChange}>
                        {refTasks.map(item =>
                            <option key={item.id} value={item.id} className="task-list__input__item">
                                {item.name}
                            </option>
                        )}
                  </Select> 
                  : 
                  <Submit mark={mark} submit={type === "submit" ? true : false } onClick={onClick} 
                        disabled={!refTasks ? false : refTasks.length > 0 ? false : true} inputRef={inputRef}/>}
            </div>
        )
    }
}

export default TaskList;