import React from 'react'
import { useParams } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';
const TaskDetails = () => {
    const params = useParams ();

    return (
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur fugiat eaque quis, quas dolor vel omnis veritatis dolore nemo recusandae amet, inventore alias beatae asperiores animi. Necessitatibus, ipsam fugiat?</p>
            </div>
        </>
    );
};

export default TaskDetails;