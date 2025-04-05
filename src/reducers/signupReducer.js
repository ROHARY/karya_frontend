const signupReducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_FIRST_NAME':
      return { ...state, firstName: action.value }
    case 'UPDATE_LAST_NAME':
      return { ...state, lastName: action.value }
    case 'UPDATE_EMAIL':
      return { ...state, email: action.value }
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.value }
    default:
      return { ...state }
  }
}

export default signupReducer