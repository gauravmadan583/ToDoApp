import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Task = ({ task }) => {

    const [modalopen, setModalopen] = useState(false);
    const { addTask, deleteTask } = useContext(GlobalContext);
    const [modifytask, setModifytask] = useState(task.task);
    const [modifydescription, setModifydescription] = useState(task.description);
    const [modifyurgent, setModifyurgent] = useState(task.urgent);
    
    const doneTask = (task) => {
        const modifiedTask = {
            id: task.id,
            task: task.task,
            description: task.description,
            urgent: task.urgent,
            done: true
        };

        deleteTask(task.id);
        addTask(modifiedTask);
    }

    const onSubmit = e => {
        e.preventDefault();

        const modifiedTask = {
            id: task.id,
            task: modifytask,
            description: modifydescription,
            urgent: modifyurgent,
            done: task.done
        };

        deleteTask(task.id);
        addTask(modifiedTask);
        toggleModal();
    }

    const toggleModal = () => {
        setModalopen(!modalopen);
    }

    return (
        <li key={task.id} className='m-2'>
            <div className='row'>
                <div className='col-6'>
                    <h1>{task.id}</h1>
                    <h1>{task.task}</h1>
                    <h2>{task.description}</h2>
                    <h2>{task.done ? 'true' : 'false'}</h2>
                </div>

                <div className='col-6 row d-flex align-content-center'>
                    <button className='col-4 btn btn-secondary' onClick={() => toggleModal()}>Modify Task</button>
                    <button className='col-4 btn btn-success' onClick={() => doneTask(task)}>Task Done</button>
                    <button className='col-4 btn btn-danger' onClick={() => deleteTask(task.id)}>Delete Task</button>
                </div>
            </div>
            <div className='row'>
                {modalopen?
                <form onSubmit={onSubmit} className='container-fluid d-flex flex-column justify-content-center'>
                    <div className='form-control form-row m-2'>
                        <label className='col-4' htmlFor='text'>Task Name</label>
                        <input type="text" value={modifytask} onChange={(e) => setModifytask(e.target.value)}></input>
                    </div>
        
                    <div className='form-control form-row m-2'>
                        <label className='col-4' htmlFor='text'>Description</label>
                        <input type='text' value={modifydescription} onChange={(e) => setModifydescription(e.target.value)}></input>
        
                    </div>
        
                    <div className='form-control form-row m-2'>
                        <label className='col-4' htmlFor='checkbox'>Is it urgent?</label>
                        <input type='checkbox' defaultChecked={modifyurgent} onChange={(e) => setModifyurgent(e.target.checked)}></input>
                    </div>
                    <button className='form-row btn btn-success m-2'>Modify Task</button>
                </form>
                :<></>}
            </div>
        </li>
    )
}

export const TaskList = () => {
    const { tasks } = useContext(GlobalContext);
    return (
        <ul className='container-fluid'>
            {tasks.map((task => <Task task={task}></Task>))}
        </ul>
    );
}