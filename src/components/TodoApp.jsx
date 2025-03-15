import TodoHeader from "./TodoHeader"
import TodosContainer from "./TodosContainer"
import TodoEdit from "./TodoEdit"
import { useState, useEffect, useReducer } from "react"
import EditContext from "../contexts/EditContext"
import todoService from "../services/todoService"
import todosReducer from "../reducers/todosReducer"

const initialState = {
  notStartedTodos: [],
  inprogressTodos: [],
  completedTodos: []
}


const TodoApp = ()  => {

  const [editTodo, setEditMode] = useState(false)
  const [todos, todosDispatch] = useReducer(todosReducer, initialState)

  useEffect(() => {
    todoService.fetchTodos().then(response => {
      todosDispatch({
        type: 'SET_TODOS',
        todos: response.data
      })
    }).catch(error => {
      console.log(error)
    })
  },[])

  const todoAdded = (todo) => {
    todosDispatch({
      type: 'ADD_TODO',
      todo
    })
  }

  return(
    <EditContext.Provider value={ { setEditMode, todos, todoAdded, todosDispatch } }>
      <div>
        <TodoHeader />
        <TodosContainer />
        { editTodo && <TodoEdit todo={editTodo} /> }
      </div>
    </EditContext.Provider>

  )
}

export default TodoApp