import React from 'react'

const Task = ({ task, onDelete, toggleTask }) =>
  <li className={task.completed ? 'task-completed' : ''}>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={toggleTask}
    />
    <span onClick={toggleTask}>{task.name}</span>
    <button onClick={onDelete}>Delete</button>
  </li>

export default Task
