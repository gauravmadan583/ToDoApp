import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTask = () => {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [urgent, setUrgent] = useState(false);

    const { addTask, counter } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTask = {
            id: counter,
            task,
            description,
            urgent,
            done: false
        }

        addTask(newTask);
        setUrgent(false);
        setTask('');
        setDescription('');
    };

    return (
        <div className="container-fluid">
            <form onSubmit={onSubmit} className='d-flex flex-column justify-content-center'>
                <div className='form-control form-row m-2'>
                    <label className='col-4' htmlFor='text'>Task Name</label>
                    <input className='col-8' type="text" value={task} onChange={(e) => setTask(e.target.value)}></input>
                </div>

                <div className='form-control form-row m-2'>
                    <label className='col-4' htmlFor='text'>Description</label>
                    <input className='col-8' type='text' value={description} onChange={(e) => setDescription(e.target.value)}></input>

                </div>

                <div className='form-control form-row m-2'>
                    <label className='col-4' htmlFor='checkbox'>Is it urgent?</label>
                    <input className='' type='checkbox' defaultChecked={urgent} onClick={(e) => setUrgent(e.target.checked)}></input>
                </div>
                <button className='form-row btn btn-primary m-2'>Add Task</button>
            </form>
        </div>
    );
};