import { useEffect, useState } from "react";
import { PrincipalLayout } from "../layout/PrincipalLayout";
import { SearchComponent } from "../components";



export const PersonajePage = () => {


    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const parametros={
        labelboton:'Buscar personaje', 
        labelresultado:'Resultado personaje',
        placeholdertextbox:'Buscar personaje',
        subtitulo:'realiza la busqueda de un personaje',
        titulo:'Buscar personaje',
        tag:'personaje',
        tipo:'heroe'
    }


    return (
        <PrincipalLayout>
            
             
             <SearchComponent {...parametros}  />
            
        </PrincipalLayout>
    );
}