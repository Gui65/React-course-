import React, { useState } from "react";

import Tasks from "./components/Tasks"
import './App.css'

const App = () => {
    const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Estudar programação',
        completed: false,
      }, 
      {
        id: '2',
        title: 'Ler Livros',
        completed: true,
      },
  ]);
  
  return (
    <>
        <div className='container'></div>
        
    </>
  );
  
};

export default App;