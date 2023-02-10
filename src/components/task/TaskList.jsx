import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  return (
    <div className='flex flex-col gap-y-4'>
      {tasks.map(task => <TaskItem title={task.title} description={task.description} id={task.id} key={task.id} />)}
    </div>
  )
}
export default TaskList
