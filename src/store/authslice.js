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
            state.isAuthenticating = true;
            state.userdata = action.payload.userdata;
        },
        logoutUser : (state) => {
            state.isAuthenticating = false;
            state.userdata = null;
        },
    }

})

export const { loginUser, logoutUser } = authSlice.actions
export default authSlice.reducer