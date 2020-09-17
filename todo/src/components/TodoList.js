import React, { useState, useReducer } from 'react';
import Todo from './Todo';
import { taskReducer, initialTaskState, ADD_TASK, TOGGLE_DONE, CLEAR_TASKS } from '../reducers/reducers'


const TodoList = () => {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);
    const [newTask, setNewTask] = useState({
        item: '',
        id: Date.now(),
        completed: false
    })


    const handleChange = e => {
        setNewTask({
            ...newTask,
            item: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: ADD_TASK, payload: newTask})
    }

    const handleClick = (taskId) => {
        dispatch({type: TOGGLE_DONE, payload: taskId});
    }

    const clearTasks = () => {
        dispatch({type: CLEAR_TASKS});
    }

    return(
        <div>
            <form>
                <label htmlFor="task">
                    Task Name:
                    <input type="text" name="task" value={newTask.item} onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}>Add Task</button>
            </form>
                {state.tasks.map(task => {
                    return(
                        <Todo task={task} key={task.id} handleClick={handleClick}/>
                    )
                })}
                <button  onClick={clearTasks}>Clear Tasks</button>
        </div>
    )
}

export default TodoList;