import React from "react";
import { Route, Routes, Link, BrowserRouter, Navigate } from "react-router-dom";
import Task from "../Task/task";
import "./style.css";

const NavigateList = ({ tasks, mark }) => (
    <BrowserRouter>
        { tasks.map(item => <Link to={`/tasks/${item.id}`} key={item.id} className="task-list__task">{item.name}</Link>)}
        
        <Routes>
            <Route path="/" element={null}/>
            <Route path="/tasks" element={<Navigate to="/"/>}/>
            <Route path="/tasks/*" element={<Task mark={mark}/>}/>
        </Routes>
    </BrowserRouter>
)

export default NavigateList;