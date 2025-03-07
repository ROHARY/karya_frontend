import { useContext } from 'react'
import '../styles/TodoEdit.css'
import EditContext from '../contexts/EditContext'

const TodoEdit = ({ text }) => {

  const setEditMode = useContext(EditContext)

  const handleSave = () => {
    setEditMode(false)
  }

  return(
    <div id="todo-edit-container">
      <div id="todo-edit">
        <input type="text" value={text}></input>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default TodoEdit