import '../styles/TodoList.css'
import Todo from './Todo'

const TodoList = ({ label}) => {

  return (
    <div id="todo-list">
      <div id="label-container">
        <h2 id="todo-list-label">{label}</h2>
      </div>
      <div id="todos">
        <Todo text="Aryan"></Todo>
        <Todo text="Aryan"></Todo>
        <Todo text="Aryan"></Todo>
      </div>
    </div>
  )

}

export default TodoList