import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../module/auth/routes/AuthRoutes";
import { useCheckAuth } from "../module/auth/hooks/useCheckAuth";
import { PrincipalRoutes } from "../module/principal/routes/PrincipalRoutes";


export const AppRouter = () => {



    return (
        <Routes>

            {
         
           <Route path="/*" element={ <PrincipalRoutes /> } />
            }


            {/*<Route path='/*' element={ <Navigate to='/auth/login' />} />*/}
        </Routes>
    );
}