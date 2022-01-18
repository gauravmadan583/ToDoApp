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
            urgent
        }

        addTask(newTask);
        setUrgent(false);

        setTask('');
        setDescription('');
    };

    return (
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Task Name</label>
                    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Task Name'></input>
                </div>

                <div className='form-control'>
                    <label htmlFor='text'>Description</label>
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description'></input>

                </div>

                <div>
                    <label htmlFor='checkbox'>Is it urgent?</label>
                    <input type='checkbox' defaultChecked={urgent} onChange={(e) => setUrgent(e.target.checked)} placeholder='Task Name'></input>
                </div>
                <button className='btn'>Add Task</button>
            </form>
    );
};