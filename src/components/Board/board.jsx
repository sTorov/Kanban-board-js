import React  from "react";
import TaskList from "../ListTask/listTask";
import "./style.css";
import { dataMock } from "../../dataMock";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: dataMock
        }
    }

    render(){
        const { data } = this.state;

        return(
            <div className="board">
                {data.map((item, index) => {
                    return <TaskList key={index} title={item.title} 
                                tasks={item.issues} 
                                type={index === 0 ? "text" : "select"}
                                refTasks={index === 0 ? undefined : data[index - 1].issues}/>
                })}
            </div>
        )
    }
}

export default Board;