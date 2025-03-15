import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/Todo.css'
import EditContext from '../contexts/EditContext'
import todoService from '../services/todoService'

const Todo = ({ todo }) => {

  const { setEditMode, todosDispatch } = useContext(EditContext)

  const handleEdit = () => {
    setEditMode(todo)
  }

  const handleDelete = () => {
    todoService.deleteTodo(todo._id).then(() => {
      todosDispatch({
        type: 'DELETE_TODO',
        todo
      })
    }).catch(error => {
      console.error(error)
    })
  }

  const handleStatusUpdate = () => {
    const payload = {}
    payload.status = !todo.status || todo.status === 'notStarted' ? 'inprogress' : 'completed'
    todoService.updateTodo(todo._id, payload).then(editedTodo => {
      todosDispatch({
        type: 'MOVE_TODO',
        todo: editedTodo
      })
    }).catch(error => {
      console.error(error)
    })
  }

  return (
    <div className="todo">
      <h3 className='todo-text'>{todo.title}</h3>
      <div id="todo-actions">
        <i onClick={handleEdit}>
         <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
        </i>
        <i>
          <FontAwesomeIcon icon={faTrash} onClick={handleDelete}></FontAwesomeIcon>
        </i>
        { todo.status !== 'completed' && (
          <i>
            <FontAwesomeIcon icon={faAnglesRight} onClick={handleStatusUpdate}></FontAwesomeIcon>
          </i>
        )}
      </div>
    </div>
  )

}

export default Todo