import React from 'react';

import Task from "./Task";

const Tasks = ({ tasks }) => {
    
    return (
        <>
            {tasks.map((task, handleTaskClick) => (
                <Task task={task} handleTaskClick={handleTaskClick} />
            ))}
        </>
        );
};

export default Tasks;