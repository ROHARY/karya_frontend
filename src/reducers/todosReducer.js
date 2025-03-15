const todosReducer = (state, action) => {
  switch(action.type){
    case 'SET_TODOS':
      const { todos } = action
      return {
        notStartedTodos: todos.filter(todo => todo.status === 'notStarted' || !todo.status),
        inprogressTodos: todos.filter(todo => todo.status === 'inprogress'),
        completedTodos: todos.filter(todo => todo.status === 'completed')
      }
    case 'ADD_TODO':
      return {
        ...state,
        notStartedTodos: [...state.notStartedTodos, action.todo]
      }
    case 'MOVE_TODO':
      const filterCallback = todo => todo._id !== action.todo._id
      const updatedTodos = {
        notStartedTodos: state.notStartedTodos.filter(filterCallback),
        inprogressTodos: state.inprogressTodos.filter(filterCallback),
        completedTodos: state.completedTodos.filter(filterCallback)
      }
      updatedTodos[`${action.todo.status}Todos`].push(action.todo)
      return updatedTodos
    case 'EDIT_TODO':
      return {
        ...state,
        [`${action.todo.status}Todos`]: state[`${action.todo.status}Todos`].map(todo =>
          todo._id === action.todo._id ? { ...todo, title: action.todo.title } : todo
        )
      }
    case 'DELETE_TODO':
      if(!action.todo.status)
        return state
      const todoType = `${action.todo.status}Todos`
      return {
        ...state,
        [todoType]: state[todoType].filter(todo => todo._id !== action.todo._id)
      }
    default:
      return { ...state }
  }
}

export default todosReducer