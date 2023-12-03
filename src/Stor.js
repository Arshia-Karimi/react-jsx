import { configureStore , createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : "user",
    initialState : {userName : ""},
    reducers : {
        login : (state , )=>{},
        logout : ()=>{}
    }
})
const store = configureStore({reducer : })