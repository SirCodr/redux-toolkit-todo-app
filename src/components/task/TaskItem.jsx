import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../../features/task/taskSlice'

const TaskItem = ({ title, description, id }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <div className='flex gap-x-4'>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
      <div className='flex gap-x-4'>
        <Link to={`edit/${id}`} className='bg-indigo-600'>Editar</Link>
        <button className='bg-red-500' onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  )
}
export default TaskItem
