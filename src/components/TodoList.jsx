import '../styles/TodoList.css'
import Todo from './Todo'

const TodoList = ({ label, todos }) => {

  return (
    <div id="todo-list">
      <div id="label-container">
        <h2 id="todo-list-label">{label}</h2>
      </div>
      <div id="todos">
        { todos.map( todo => (<Todo key={todo._id} todo={todo}></Todo> )) }
      </div>
    </div>
  )

}

export default TodoList