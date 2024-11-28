import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages"


export const AuthRoutes = () => {
    console.log('creating');
    return (
      <Routes>
          <Route path="login" element={ <LoginPage /> } />
          
  
          {/*<Route path='/*' element={ <Navigate to="/auth/login" /> } />*/}
      </Routes>
    )
  }