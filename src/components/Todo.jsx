import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/Todo.css'
import EditContext from '../contexts/EditContext'

const Todo = ({ text }) => {

  const setEditMode = useContext(EditContext)

  const handleEdit = () => {
    setEditMode(true)
  }

  return (
    <div className="todo">
      <h3 className='todo-text'>{text}</h3>
      <div id="todo-actions">
        <i onClick={handleEdit}>
         <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
        </i>
        <i>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </i>
        <i>
          <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>
        </i>
      </div>
    </div>
  )

}

export default Todo