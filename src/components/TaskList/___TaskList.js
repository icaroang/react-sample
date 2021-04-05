import React, { useState } from 'react';
import './tasklist.css';
import PropTypes from 'prop-types';

// props is all params { key: value }
// only be used not changed
function TaskList ({ title }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    })
  }

  return(
    <div className='tasklist'>
      <div className='title'>{title}</div>
      <div className='content'>
        {count}
        <button onClick={increment}> incrementar </button>
      </div>
    </div>
  )
}

export default TaskList

TaskList.propTypes = {
  title: PropTypes.string.isRequired
}