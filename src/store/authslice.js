import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    
    
    isAuthenticating:false,
    userdata:null

}

const authSlice = createSlice({

    name: 'auth',
    initialState: initialstate,
    reducers: {
        loginUser : (state, action) => {
            state.isAuthenticating = false;
            state.userdata = action.payload;
        },
        logoutUser : (state) => {
            state.userdata = null;
        },
    }

})

export const { loginUser, logoutUser } = authSlice.actions
export default authSlice.reducer