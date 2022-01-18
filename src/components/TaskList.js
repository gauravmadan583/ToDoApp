import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ModifyTask = ({ task }) => {

    const [modifytask, setModifytask] = useState(task.task);
    const [modifydescription, setModifydescription] = useState(task.description);
    const [modifyurgent, setModifyurgent] = useState(task.urgent);

    const { addTask, deleteTask } = useContext(GlobalContext)
    const onSubmit = e => {
        e.preventDefault();

        const modifiedTask = {
            id: task.id,
            task: modifytask,
            description: modifydescription,
            urgent: modifyurgent
        };
        
        deleteTask(task.id);
        addTask(modifiedTask);

        
    }
    return (

        <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Task Name</label>
                    <input type="text" value={modifytask} onChange={(e) => setModifytask(e.target.value)}></input>
                </div>

                <div className='form-control'>
                    <label htmlFor='text'>Description</label>
                    <input type='text' value={modifydescription} onChange={(e) => setModifydescription(e.target.value)}></input>

                </div>

                <div>
                    <label htmlFor='checkbox'>Is it urgent?</label>
                    <input type='checkbox' defaultChecked={modifyurgent} onChange={(e) => setModifyurgent(e.target.checked)}></input>
                </div>
                <button className='btn'>Modify Task</button>

        </form>

    );
}

const Task = ({ task }) => {

    const { deleteTask } = useContext(GlobalContext);

    return (
        <li key={task.id}>
            <h1>{task.id}</h1>
            <h1>{task.task}</h1>
            <h2>{task.description}</h2>
            <ModifyTask task={task} />
            <button onClick={() => deleteTask(task.id)}> Delete Task</button>
        </li>
    )
}

export const TaskList = () => {
    const { tasks } = useContext(GlobalContext);
    return (
        <ul>
            {tasks.map((task => <Task task={task}></Task>))};
        </ul>
    );
}