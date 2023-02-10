import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../features/task/taskSlice'

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '' })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const inputName = e.target.name
    const value = e.target.value

    setTask(prevTask => ({ ...prevTask, [inputName]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask(task))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='title' onChange={handleChange} />
      <textarea name='description' placeholder='description' onChange={handleChange} />
      <button>Save</button>
    </form>
  )
}
export default TaskForm
