import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    tasks: [
        
    ],
    counter: 1
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTask(id) {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        });
    }

    function addTask(task) {
        dispatch({
            type: 'ADD_TASK',
            payload: task
        });
    }
    return (
        <GlobalContext.Provider value={{
            tasks: state.tasks,
            counter: state.counter,
            deleteTask, 
            addTask,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}