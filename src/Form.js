import React, { useState } from 'react'

const Form = ({ onSubmit }) => {
  const [taskName, setTaskName ] = useState('')

  const submit = e => {
    e.preventDefault()
    onSubmit(taskName)
    setTaskName('')
  }

  return (
    <form name="add-task" onSubmit={submit}>
      <label>Add task:</label>
      <input
        type="text"
        value={taskName}
        placeholder="ie. Go shopping, Take out the trash"
        onChange={event => setTaskName(event.target.value)}
        autoFocus
      />
      <input
        type="submit"
        disabled={!taskName}
        value="Add Task"
      />
    </form>
  )
}

export default Form
