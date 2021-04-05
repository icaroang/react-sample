import './App.css';
import './style.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList';

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
}

function App() {
  // poderia iniciar com array vazio ou valores do banco de dados
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(), title, state
    }

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    })
  }

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return {...task, title, state};
        } else {
          return task;
        }
      })
    })
  }

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((t) => t.id !== id);
    })
  }

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
          <TaskList title='Pendente'
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === 'Pendente')}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          taskState='Pendente'
          />
          <TaskList title='Fazendo'
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === 'Fazendo')}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          taskState='Fazendo'
          />
          <TaskList title='Completa'
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === 'Completa')}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          taskState='Completa'
          />
      </div>
    </div>
  );
}

export default App;
