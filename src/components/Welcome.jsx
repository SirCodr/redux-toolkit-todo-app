import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      Welcome
      <div className='flex gap-x-4'>
        <Link to='task'>Tareas</Link>
        <Link to='task/new'>Crear tarea</Link>
      </div>
    </div>
  )
}
export default Welcome
