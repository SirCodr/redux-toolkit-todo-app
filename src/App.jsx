import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import TaskList from './components/task/TaskList'
import TaskForm from './components/task/TaskForm'
import Layout from './components/Layout'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='task' element={<TaskList />} />
            <Route path='task/new' element={<TaskForm />} />
            <Route path='task/edit/:id' element={<TaskForm />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
