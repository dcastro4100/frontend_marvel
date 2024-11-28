
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
name: 'auth',
initialState:{
    status: 'checking', // 'checking','not-authenticated','authenticated
    id: null,
    login: null,
    errorMessage: null,
},
reducers: {
    onLogin: (state ,{payload} ) => {
        state.status= 'authenticated', // 'checking','not-authenticated','authenticated
        state.id= payload.id;
        state.login= payload.login;
        state.errorMessage= null;
    
    },
    onLogout: (state,{payload}) =>{
        
        state.status= 'not-authenticated', // 'checking','not-authenticated','authenticated
        state.id= null;
        state.login= null;
        state.errorMessage= payload.errorMessage;
    },
    onCheckingCredentials: (state) => {
        state.status='checking';
    },
    clearErrorMessage: ( state ) => {
        state.errorMessage = null;
    }
},
})
// Action creators are generated for each case reducer function
export const { onLogin,onLogout,onCheckingCredentials,clearErrorMessage } = authSlice.actions