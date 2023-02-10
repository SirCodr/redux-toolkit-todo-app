import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'
import { Outlet } from 'react-router-dom'

const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  return (
    <div className='flex flex-col gap-y-4'>
      {tasks.map(task => <TaskItem title={task.title} description={task.description} id={task.id} key={task.id} />)}
      <Outlet />
    </div>
  )
}
export default TaskList
