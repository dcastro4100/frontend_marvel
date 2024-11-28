import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage, onCheckingCredentials, onLogin, onLogout } from "../../../store/auth";



export const useCheckAuth=()=>{
    const {  status,id,login,errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        //cambiando el status a checking
        dispatch( onCheckingCredentials() );

        try {

            const { data } = await backendApi.post('/auth/login',{ login:email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ login: data.login, id: data.id }) );
            
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout({errorMessage:null}) );

        try{
            
        } catch (error) {
            //console.log("error al conectar al backend check-status "+error);
            localStorage.clear();
            dispatch( onLogout({errorMessage:null}) );
        }
    }

    const startLogout = () => {
        console.log('enviando');
        localStorage.clear();
        dispatch(onLogout({errorMessage:null}));
    }

    return {
        //propiedades
        status,
        id,
        login,
        errorMessage,

        //acciones
        startLogin,
        checkAuthToken,
        startLogout,
    };
}