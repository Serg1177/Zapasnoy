import { createAction, createReducer } from '@reduxjs/toolkit'
import { UserInterface } from '../../user/userInterface'


const setUser = createAction<{user: UserInterface}>('infoprofile/setUser')


const initialState = { 
    user: {}
 }

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, {payload}) => {
      state.user = payload.user    })
})