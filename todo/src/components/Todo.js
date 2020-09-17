import React from "react";

import styled from "styled-components";


const Task = styled.h4`
box-sizing: border-box;
text-align: center;
`;

const Todo = (props) => {

    const handleClick = e => {
        e.preventDefault();
        props.toggleDone(props.task.id);
    }

    return(
        <div onClick={handleClick} className={`task${props.task.completed ? "-complete" : ""}`}>
            <Task>{props.task.name}</Task>
        </div>
    )
}

export default Todo;