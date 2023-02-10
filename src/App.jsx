import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import TaskList from './components/task/TaskList'
import TaskForm from './components/task/TaskForm'
import Layout from './components/Layout'

function App () {
  return (
    <div className='flex flex-col items-center w-wull h-screen'>
      <BrowserRouter>
        <Layout>
          <main className='w-full h-full max-w-xl'>
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='task' element={<TaskList />} />
              <Route path='task/new' element={<TaskForm />} />
              <Route path='task/edit/:id' element={<TaskForm />} />
            </Routes>
          </main>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
