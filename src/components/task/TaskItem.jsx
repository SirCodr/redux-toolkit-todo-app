import { useDispatch } from 'react-redux'
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
      <button className='bg-red-500' onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}
export default TaskItem
