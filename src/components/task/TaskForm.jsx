import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addTask, editTask } from '../../features/task/taskSlice'

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '' })
  const [redirect, setRedirect] = useState(false)
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const handleChange = (e) => {
    const inputName = e.target.name
    const value = e.target.value

    setTask(prevTask => ({ ...prevTask, [inputName]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {
      dispatch(editTask({ ...task, id: params.id }))
    } else {
      dispatch(addTask(task))
    }
    setRedirect(true)
  }

  useEffect(() => {
    let redirectTimer
    if (redirect) {
      redirectTimer = setTimeout(() => {
        navigate('/task')
      }, 800)
    }

    return () => {
      clearTimeout(redirectTimer)
    }
  }, [redirect])

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find(task => task.id === params.id)
      setTask(taskFound)
    }
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='title' onChange={handleChange} defaultValue={task.title} />
      <textarea name='description' placeholder='description' onChange={handleChange} defaultValue={task.description} />
      <button>Save</button>

      {redirect && <div>Redirigiendo...</div>}
    </form>
  )
}
export default TaskForm
