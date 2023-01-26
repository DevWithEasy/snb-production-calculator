import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        isUser : false,
        user : {}
    },
    reducers : {
        login : (state,action) =>{
            state.isUser = true
            state.user = action.payload
        },
        logout : (state,action) =>{
            state.isUser = false
            state.user = {}
        }
    }
})

export const {login,logout} = userSlice.actions
export default userSlice.reducer