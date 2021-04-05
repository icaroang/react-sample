import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './taskitem.css';

function TaskItem({id, title, taskState, onTaskUpdate, onDeleteTask}){
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    let newValue = event.target.value;
    setEditableTitle(newValue);
    onTaskUpdate(id, newValue, taskState);
  }

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if(editableTitle.length == 0) {
        onDeleteTask(id);
      }
    }
  }

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value)
  }

  if (isEditing){
    return (
      <div className='task-item'>
        <input type='text' value={editableTitle} onChange={onTitleChange} onKeyPress={onKeyPress} />
      </div>
    )
  } else {
    return (
    <div className='task-item'>
      <div onClick={(e) => setIsEditing(true)}>
        {editableTitle}
      </div>
      <select onChange={onTaskStateChange} value={taskState}>
        <option value='Pendente'>Pendente</option>
        <option value='Fazendo'>Fazendo</option>
        <option value='Completa'>Completa</option>
      </select>
    </div>
    )
  }
}

export default TaskItem;

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
}