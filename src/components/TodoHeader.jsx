import TodoForm from "./TodoForm"
import '../styles/TodoHeader.css'

const TodoHeader = () => {
  return (
    <div id="todo-header">
      <div id="todo-header-title">
        <h1>RNA Todos V1</h1>
      </div>
      <div id="todo-form-container">
        <TodoForm></TodoForm>
      </div>
    </div>
  )

}

export default TodoHeader