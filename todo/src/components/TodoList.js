import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import styled from "styled-components";

const Main = styled.div`
margin: 50px 30%;
`;

const Button = styled.button`
height: 50px;
border-radius: 50%;
margin-left: 4%;
`;

const TodoList = (props) => {
    return (
        <Main>
            <TodoForm addTask={props.addTask} />
            {props.tasks.map(task => {
                return(
                    <Todo task={task} toggleDone={props.toggleDone}/>
                )
            })}
            <Button onClick={props.clear}>Clear Completed</Button>
        </Main>
    )
}

export default TodoList;