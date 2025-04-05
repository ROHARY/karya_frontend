import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../services/userService";

const signUpThunk = createAsyncThunk('user/signUp',async(payload, {dispatch, getState})=>{
  // const response = await userService.signUp(payload)
  console.log('adajsdajdjb')
  const response = await new Promise((res,rej)=>setTimeout(()=>{
    res(payload)
  }, 3000))
  console.log('xxx',response)
  return payload
})

const initialState = {
  firstName: '',
  lastName: '',
  email: "",
  isLoggedIn: false,
  pending: false
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder)=>{
    builder.addCase(signUpThunk.pending, (state, action)=>{
      state.isLoggedIn = false
      state.pending = true
    })
    .addCase(signUpThunk.fulfilled, (state, action)=>{
      let data = action.payload
      data.isLoggedIn = true
      data.pending = false
      return data
    })
    .addCase(signUpThunk.rejected, (state, action)=>{
      state = initialState
    })
  }
})
export {signUpThunk}
export const {signUp} = userSlice.actions
export default userSlice.reducer