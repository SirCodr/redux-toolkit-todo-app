const reducer = {
  addTask: (state, action) => {
    state.push({ ...action.payload, id: (state.length + 1) })
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
