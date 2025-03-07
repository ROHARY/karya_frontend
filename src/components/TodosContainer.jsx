
import TodoList from './TodoList'
import '../styles/TodosContainer.css'

 const TodosContainer = () => {

  return(
    <div id="todos-container">
      <div className='list' id="not-started-list">
        <TodoList label="Not Started" ></TodoList>
      </div>
      <div className='list' id="in-progress-list">
        <TodoList label="In Progress"></TodoList>
      </div>
      <div className='list' id="completed-list">
        <TodoList label="Completed"></TodoList>
      </div>
    </div>
  )

 }

export default TodosContainer