import { useContext, useState } from 'react'
import '../../styles/todos/TodoEdit.css'
import EditContext from '../../contexts/EditContext'
import todoService from '../../services/todoService'

const TodoEdit = ({ todo }) => {
  const { setEditMode, todosDispatch } = useContext(EditContext)
  const [ title, setTitle ] = useState(todo.title)

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value)
  }

  const handleSave = () => {
    const payload = {}
    payload.title = title
    todoService.updateTodo(todo._id, payload).then(editedTodo => {
      todosDispatch({
        type: 'EDIT_TODO',
        todo: editedTodo
      })
      setEditMode(false)
    }).catch(error => {
      console.error(error)
    })
  }

  return(
    <div id="todo-edit-container">
      <div id="todo-edit">
        <input type="text" value={title} onChange={titleChangeHandler}></input>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default TodoEdit