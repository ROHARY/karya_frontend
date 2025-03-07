import TodoHeader from "./TodoHeader"
import TodosContainer from "./TodosContainer"
import TodoEdit from "./TodoEdit"
import React from "react"
import EditContext from "../contexts/EditContext"

const TodoApp = ()  => {

  const [editMode, setEditMode] = React.useState(false)

  return(
    <EditContext.Provider value={setEditMode}>
      <div>
        <TodoHeader/>
        <TodosContainer />
        { editMode && <TodoEdit /> }
      </div>
    </EditContext.Provider>

  )
}

export default TodoApp