import React, { createRef } from "react";
import { Link } from "react-router-dom";
import closeImg from "../../img/Cross.svg";
import editImg from "../../img/Pencil.svg";
import tapEditImg from "../../img/TapPencil.svg";
import { getTask, setDescription } from "../../modules/localStorage";
import "./style.css";

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            task: getTask(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1], this.props.mark),
            editImg: editImg,
            textareaDisabled: true
        }

        this.textareaRef = createRef();
    }   

    handleClick = () => {
        const { textareaDisabled, task } = this.state;
        const { mark } = this.props;
        if(!textareaDisabled){
            task.description = this.textareaRef.current.value;
            setDescription(task, mark);
        }

        this.setState(state => ({
            editImg: state.editImg === editImg ? tapEditImg : editImg,
            textareaDisabled: !state.textareaDisabled,
            // task: !state.textareaDisabled ? task : state.task
        }))
    }

    componentDidUpdate(){
        const { textareaDisabled } = this.state;
        if(!textareaDisabled){
            this.textareaRef.current.focus();
            this.textareaRef.current.selectionStart = this.textareaRef.current.value.length;
            this.textareaRef.current.scrollTop = this.textareaRef.current.scrollHeight;
        }
    }

    render(){
        const { task, editImg, textareaDisabled } = this.state;

        if(task){
            return (
                <div className="task">
                    <Link to="/">
                        <img src={closeImg} className="task__close-img" alt="close img"/>
                    </Link>
                    <img src={editImg} className="task__edit-img" alt="edit img" onClick={this.handleClick}/>
                    <h1 className="task__title">{task.name}</h1>
                    <textarea className="task__description" defaultValue={task.description} 
                            ref={this.textareaRef} disabled={textareaDisabled}/>
                </div>
            )
        }        
    }
}

export default Task;