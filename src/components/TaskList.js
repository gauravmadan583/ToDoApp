import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Task } from './Task';

export const TaskList = () => {

    const [showurgent, setShowurgent] = useState(false);
    const [showcompleted, setShowcompleted] = useState(false);

    const { tasks } = useContext(GlobalContext);

    return (
        <div className='container-fluid'>
            <div className='row m-2 d-flex justify-content-center'>
                <div className='col-5'>
                    <input className='m-1' type="checkbox" defaultChecked={showurgent} onClick={(e) => setShowurgent(e.target.checked)}></input>
                    <label htmlFor='checkbox'>Urgent</label>
                </div>
                <div className="col-6">
                    <input className='m-1' type="checkbox" defaultChecked={showcompleted} onClick={(e) => setShowcompleted(e.target.checked)}></input>
                    <label htmlFor='checkbox'>Completed</label>
                </div>
            </div>
            <div className="row m-2">
                {tasks
                .filter((task => (showcompleted & task.done) | (!showcompleted & !task.done)))
                .filter((task => (showurgent & task.urgent) | (!showurgent)))
                .map((task => <Task task={task}/>))
                }
            </div>
        </div>

    );
}