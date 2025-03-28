import { useState, useContext } from 'react'
import '../../styles/todos/TodoForm.css'
import todoService from '../../services/todoService'
import EditContext from "../../contexts/EditContext"

const TodoForm = () => {

  const [todoText, setTodoText] = useState('')
  const { todoAdded } = useContext(EditContext)

  const handleTodoTextChange = (event) => {
    setTodoText(event.currentTarget.value)
  }

  const handleAddTodo = (event) => {
    event.preventDefault()
    todoService.createTodo({ title: todoText })
    .then(todo => {
      todoAdded(todo.data)
      setTodoText('')
    })
    .catch(error => {
      console.error(error)
    })
  }

  return(
    <form id="todo-form" onSubmit={handleAddTodo}>
      <input type="text" value={todoText} onChange={handleTodoTextChange}></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm