import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../../features/task/taskSlice'

const TaskItem = ({ title, description, id }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className='flex flex-col gap-y-2 py-2 px-4 bg-neutral-200'>
      <div className='flex gap-x-4 flex-1'>
        <input type='checkbox' />
        <span className=''>{title}</span>
      </div>
      <div>
        <span>{description}</span>
      </div>
      <div className='flex gap-x-4'>
        <Link to={`edit/${id}`} className='bg-indigo-600 p-1'>
          Editar
        </Link>
        <button className='bg-red-500 p-1' onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  )
}
export default TaskItem
