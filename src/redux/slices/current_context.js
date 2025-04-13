import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../services/userService";
import { signUpThunk } from "./user";

const signInThunk = createAsyncThunk('user/signUp',async(payload, {dispatch, getState})=>{
  // const response = await userService.signUp(payload)
  let dummy_user  = {
    firstName: 'Rohit',
    lastName: 'Rana',
    name: 'Rohit Rana',
    email: "rohit@gmail.com",
    location: 'Bengaluru',
    ...payload
  }
  const response = await new Promise((res,rej)=>setTimeout(()=>{
    res({accessToken: 'shdcsugdwyigzbcshdbcshdqwvwvhsvhjchwbwbschkbsjwhdwhhqbvqhvdejhdvhcammaxaxmdbjbwuwfbw'})
  }, 2000))
  console.log('xxx',response)
  return {...response, ...dummy_user}
})

const initialState = {
  status: {
    isLoggedIn: false,
    pending: false,
    error: null
  },
  currentUser: {
    firstName: '',
    lastName: '',
    email: "",
    location: ''
  },
  accessToken: ''
}
const currentContext = createSlice({
  name: 'currentContext',
  initialState,
  reducers: {
  },
  extraReducers: (builder)=>{
    builder.addCase(signUpThunk.fulfilled, (state, action)=>{
      state.currentUser = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        name: action.payload.firstName + action.payload.lastName,
        location: 'Bengaluru'
      }
      state.status.error = ''
      state.status.isLoggedIn = true
      state.status.pending = false
      state.accessToken = 'shdcsugdwyigzbcshdbcshdqwvwvhsvhjchwbwbschkbsjwhdwhhqbvqhvdejhdvhcammaxaxmdbjbwuwfbw'
    })
  }
})
export {signInThunk}
export const {signUp} = currentContext.actions
export default currentContext.reducer