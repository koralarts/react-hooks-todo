import React, { useState } from 'react'
import Form from './Form'
import Task from './Task'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])

  const toggleTask = (index) => {
    const task = tasks[index]
    setTasks([
      ...tasks.slice(0, index),
      {
        ...task,
        completed: !task.completed
      },
      ...tasks.slice(index + 1)
    ])
  }

  const deleteTask = index => setTasks([
    ...tasks.slice(0, index),
    ...tasks.slice(index + 1)
  ])

  const addTask = name => setTasks([
    ...tasks,
    {
      name,
      completed: false
    }
  ])

  const markAllAsDone = () => setTasks(tasks.map(task => ({
    ...task,
    completed: true
  })))

  const removeCompleted = () => setTasks([
    ...tasks.filter(({ completed }) => !completed)
  ])

  return (
    <div className="App">
      <header>
        <h1>Todo Application</h1>
        <p>A Todo Application using ReactJS Hooks</p>
        <a href="https://github.com/koralarts/react-hooks-todo">Checkout the code on Github</a>
      </header>

      <h2>Tasks ({tasks.length})</h2>

      <div id="actions">
        <button
          onClick={markAllAsDone}
          disabled={!tasks.length}
        >
          Mark all as done
        </button>

        <button
          onClick={removeCompleted}
          disabled={!tasks.length}
        >
          Remove completed
        </button>
      </div>

      <ul>
        {tasks.map((task, index) =>
          <Task
            key={`${index}-${task.name}`}
            task={task}
            toggleTask={() => toggleTask(index)}
            onDelete={() => deleteTask(index)}
          />
        )}
      </ul>

      <Form onSubmit={addTask} />
    </div>
  )
}

export default App
