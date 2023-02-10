import { createSlice } from '@reduxjs/toolkit'
import taskReducer from './taskReducer'

const initialState = [
  {
    id: '0001',
    title: 'Primera tarea',
    description: 'Esta es una tarea generada automaticamente'
  }
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: taskReducer
})

export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer
