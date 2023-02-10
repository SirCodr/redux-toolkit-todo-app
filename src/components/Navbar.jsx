import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='flex gap-x-8 p-4 w-full max-w-xl'>
      <Link to='/'>Home</Link>
      <Link to='/task'>Tareas</Link>
      <Link to='/task/new'>Crear tarea</Link>
    </header>
  )
}
export default Navbar
