import { v4 as uuid } from 'uuid'

const reducer = {
  addTask: (state, action) => {
    state.push({ ...action.payload, id: uuid() })
  },
  editTask: (state, action) => {
    const { title, description, id } = action.payload
    const taskFound = state.find(task => task.id === id)

    if (taskFound) {
      taskFound.title = title
      taskFound.description = description
    }
  },
  deleteTask: (state, action) => {
    const taskFound = state.find(task => task.id === action.payload)

    if (taskFound) {
      const deleteIndex = state.indexOf(taskFound)
      state.splice(deleteIndex, 1)
    }
  }
}

export default reducer
