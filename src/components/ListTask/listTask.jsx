import React from "react";
import Submit from "../Submit/submit";
import Select from "../Select/select";
import "./style.css";
import NavigateList from "../NavigateList/navigateList";
import SelectItem from "../SelectItem/selectItem";

class TaskList extends React.Component{
    componentDidMount(){
        this.ref.scrollTop = this.ref.scrollHeight;
    }

    // componentDidUpdate(){
    //     this.ref.scrollTop = this.ref.scrollHeight;
    // }

    render(){
        const { tasks, title, type, refTasks, onClick, onChange, mark, inputRef } = this.props;

        return(
            <div className="task-list" ref={(e) => this.ref = e}>
                <p className="task-list__title">{title}</p>
                
                <NavigateList tasks={tasks} mark={mark}/>

                { type === "select" 
                  ? 
                  <Select mark={mark} onChange={onChange}>
                        {refTasks.map(item => <SelectItem key={item.id} item={item}/>)}
                  </Select> 
                  : 
                  <Submit mark={mark} submit={type === "submit" ? true : false } onClick={onClick} 
                        disabled={!refTasks ? false : refTasks.length > 0 ? false : true} inputRef={inputRef}/>}
            </div>
        )
    }
}

export default TaskList;