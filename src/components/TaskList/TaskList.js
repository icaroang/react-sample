import React from 'react';
import './tasklist.css';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem';

// props is all params { key: value }
// only be used not changed
function TaskList ({ title, onAddTask, tasks, onTaskUpdate, taskState, onDeleteTask }) {
  const addTask = () => {
    onAddTask('Nova Tarefa', taskState);
  }

  return(
    <div className='tasklist'>
      <div className='title'>{title}</div>
      <div className='content'>
        {tasks.map((task) => {
          return <TaskItem key={task.id}
          title={task.title}
          id={task.id}
          taskState={task.state}
          onTaskUpdate={onTaskUpdate}
          onDeleteTask={onDeleteTask}
           />
        })}

        { tasks.length === 0 && <div className='empty-list'>Lista Vazia</div> }

        <button className='btn' onClick={addTask}>Adicionar Tarefa</button>
      </div>
    </div>
  )
}

export default TaskList

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
}