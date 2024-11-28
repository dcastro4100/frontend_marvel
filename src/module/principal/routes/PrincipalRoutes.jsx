import { Navigate, Route, Routes } from "react-router-dom"
import { PrincipalPage } from "../pages/PrincipalPage"
import { ComicPage, IndividualPage, PersonajePage, SeriePage } from "../pages"



export const PrincipalRoutes = () => {
    return (
      <Routes>
          <Route path="/" element={ <PrincipalPage /> } />
          
          

          <Route path="/personaje" element={<PersonajePage />} />
          <Route path="/comic" element={<ComicPage />} />
          <Route path="/serie" element={<SeriePage />} />


          <Route path="view/:id/:tipo" element={<IndividualPage />} />
          

          {/*<Route path="/*" element={ <Navigate to="/" /> } />*/}
          
      </Routes>
    )
  }