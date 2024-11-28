import { onCheckingCredentials } from "./authSlice";

export const checkingAuthentication =(usuario,password)=>{

    return async(dispatch)=>{

        dispatch(onCheckingCredentials());

    }

}