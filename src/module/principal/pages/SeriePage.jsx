import { useEffect, useState } from "react";
import { PrincipalLayout } from "../layout/PrincipalLayout";
import { SearchComponent } from "../components";


export const SeriePage = () => {


    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const parametros={
        labelboton:'Buscar Serie', 
        labelresultado:'Resultado serie',
        placeholdertextbox:'Buscar serie',
        subtitulo:'realiza la busqueda de una serie',
        titulo:'Buscar serie',
        tag:'serie',
        tipo:'serie'
    }


    return (
        <PrincipalLayout>
            
             
             <SearchComponent {...parametros}  />
            
        </PrincipalLayout>
    );
}