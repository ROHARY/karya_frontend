import {  useReducer } from 'react'
import '../../styles/authentication/SignUp.css'
import signupReducer from '../../reducers/signupReducer'

const starterSingupFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

const SignUp = () => {
  const [signupFields, signupFieldsDispatch] = useReducer(signupReducer, starterSingupFields)

  const summitHandler = (event) => {
    event.preventDefault()
    window.location.href = 'todos'
  }

  return(
    <div id='signup-container'>
      <div id='signup-form-container'>
        <div id='signup-form-header-container'>
          <h1>SignUp Form</h1>
        </div>
        <form onSubmit={summitHandler}>
          <div>
            <label>First Name:</label>
            <input type='text' value={signupFields.firstName} onChange={ (event) => { signupFieldsDispatch({ type: 'UPDATE_FIRST_NAME', value: event.currentTarget.value }) } }></input>
          </div>
          <div>
            <label>Last Name:</label>
            <input type='text' value={signupFields.lastName} onChange={ (event) => { signupFieldsDispatch({ type: 'UPDATE_LAST_NAME', value: event.currentTarget.value }) } }></input>
          </div>
          <div>
            <label>Email:</label>
            <input type='text' value={signupFields.email} onChange={ (event) => { signupFieldsDispatch({ type: 'UPDATE_EMAIL', value: event.currentTarget.value }) } }></input>
          </div>
          <div>
            <label>Password:</label>
            <input type='text' value={signupFields.password} onChange={ (event) => { signupFieldsDispatch({ type: 'UPDATE_PASSWORD', value: event.currentTarget.value }) } }></input>
          </div>
          <div id='signup-button-container'>
            <button type='submit'>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;