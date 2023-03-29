import React from "react";
import buttonImg from "../../img/Plus.svg";
import "./style.css";

function Submit({ submit, disabled, onClick, mark, inputRef }){
    if(submit){
        return(
            <>
                <input className="task-list__input" type="text" placeholder="Create task..." ref={inputRef}/>
                <button className="task-list__submit-button" type="button" onClick={() => onClick(mark, true)}>Submit</button>
            </> 
        )
    } else {
        return <button className="task-list__button" type="button" 
                    onClick={() => onClick(mark, false)} disabled={disabled}>
                    <img className="task-list__button__img" src={buttonImg} alt="button-icon"/>
                    Add card
                </button>
    }    
}

export default Submit;