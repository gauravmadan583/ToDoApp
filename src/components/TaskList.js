import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Task = ({task}) => {
    return (
        <li key={task.id}>
            <h1>{task.task}</h1>
            <h2>{task.description}</h2>
            <p>{task.date}</p>
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