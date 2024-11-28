import { useEffect, useState } from "react";
import { PrincipalLayout } from "../layout/PrincipalLayout";
import { SearchComponent } from "../components";




export const ComicPage = () => {


    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const parametros={
        labelboton:'Buscar Comic', 
        labelresultado:'Resultado comic',
        placeholdertextbox:'Buscar comic',
        subtitulo:'realiza la busqueda de un comic',
        titulo:'Buscar comic',
        tag:'comic',
        tipo:'comic'
    }


    return (
        <PrincipalLayout>
            
             
             <SearchComponent {...parametros}  />
            
        </PrincipalLayout>
    );
}