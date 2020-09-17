import React from 'react';

const Todo = (props) => {

    return(
        <div onClick={() => {
            console.log('I work!')
            props.handleClick(props.task.id)
            }}>
            <p style={props.task.completed ? {textDecoration: 'line-through'} : null}>{props.task.item}</p>
        </div>
    )
}

export default Todo;