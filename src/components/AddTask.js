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
                    <input className='' type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Task Name'></input>
                </div>

                <div className='form-control form-row m-2'>
                    <label className='col-4' htmlFor='text'>Description</label>
                    <input className='' type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description'></input>

                </div>

                <div className='form-control form-row m-2'>
                    <label className='col-4' htmlFor='checkbox'>Is it urgent?</label>
                    <input className='' type='checkbox' defaultChecked={urgent} onChange={(e) => setUrgent(e.target.checked)} placeholder='Task Name'></input>
                </div>
                <button className='form-row btn btn-primary m-2'>Add Task</button>
            </form>
        </div>
    );
};