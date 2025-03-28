
import TodoList from './TodoList'
import '../../styles/todos/TodosContainer.css'
import { useContext } from 'react'

import EditContext from '../../contexts/EditContext'

 const TodosContainer = () => {

  const { todos } = useContext(EditContext)

  return(
    <div id="todos-container">
      <div className='list' id="not-started-list">
        <TodoList label="Not Started" todos={todos.notStartedTodos} ></TodoList>
      </div>
      <div className='list' id="in-progress-list">
        <TodoList label="In Progress" todos={todos.inprogressTodos}></TodoList>
      </div>
      <div className='list' id="completed-list">
        <TodoList label="Completed" todos={todos.completedTodos}></TodoList>
      </div>
    </div>
  )

 }

export default TodosContainer