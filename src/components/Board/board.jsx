import React, { createRef }  from "react";
import TaskList from "../ListTask/listTask";
import "./style.css";
import { getData, setData } from "../../modules/localStorage";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: getData(),
            types: {}
        }

        this.backlogRef = createRef();
        this.readyRef = createRef();
        this.inProgressRef = createRef();
        this.finishedRef = createRef();

        this.inputRef = createRef();

        this.refList = [this.backlogRef, this.readyRef, this.inProgressRef, this.finishedRef]
    }

    componentDidMount(){
        this.props.countTask(this.state.data);
    }

    handleClick = (index, submiting) => {
        if(submiting && this.inputRef.current.value !== null && this.inputRef.current.value.trim().length > 0){
            const { data } = this.state;
            const newTask = {
                id: crypto.randomUUID(),
                name: this.inputRef.current.value,
                description: 'This task has no description'
            }

            data[0].issues.push(newTask);
            setData(data);

            this.setState({
                data: data
            })

            this.props.countTask(data);
        }            

        this.changeTypeList(index);
    }

    handleChange = (event, index) => {        
        const { data } = this.state;
        
        const task = data[index - 1].issues.find(el => el.id === event.target.value);
        const taskIndex = data[index - 1].issues.indexOf(task);
        data[index - 1].issues.splice(taskIndex, 1);
        data[index].issues.push(task);
        
        setData(data);
        
        this.setState({
            data: data
        })
        
        this.props.countTask(data);        
        this.changeTypeList(index);
    }

    changeTypeList = index => {
        const ref = this.refList[index];
        let type = "";

        if(index === 0){
            type = ref.current.props.type === "button" ? "submit" : "button"
        } else {
            type = ref.current.props.type === "button" ? "select" : "button"
        }

        this.setState(state => (
            {types:{ 
                ...state.types,
                [ref.current.props.title]: type,
            }})
        )
    }

    render(){
        const { data, types } = this.state;

        return(
            <main className="board">
                {data.map((item, index) => {
                    return <TaskList key={index} 
                                title={item.title}
                                mark={index} 
                                tasks={item.issues} 
                                type={types[item.title] || "button"}
                                refTasks={index === 0 ? undefined : data[index - 1].issues}
                                ref={this.refList[index]}
                                inputRef={index === 0 ? this.inputRef : undefined}
                                onClick={this.handleClick} onChange={this.handleChange}/>
                })}
            </main>
        )
    }
}

export default Board;