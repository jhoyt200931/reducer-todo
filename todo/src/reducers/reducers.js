import React from 'react';

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_DONE = 'TOGGLE_DONE';
export const CLEAR_TASKS = 'CLEAR_TASKS';

export const initialTaskState = { 
  tasks:  [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const taskReducer = (state, action) => {
    switch(action.type) {
        case ADD_TASK: 
           return {
               tasks: [
                   ...state.tasks,
                   action.payload
               ]
            }
        case TOGGLE_DONE: 
            return{
                ...state,
                tasks:
                state.tasks.map(task => {
                    if(action.payload === task.id ) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }
                    return task;
                })    
        }
        case CLEAR_TASKS:
            return{
                ...state,
                tasks:
                    state.tasks.filter(task => {
                        return !task.completed;
                    })
            }
        default: return state;
    }
};