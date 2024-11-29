import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getMarvelCharacterById, getMarvelComicById, extractCharacterData, extractComicData, getMarvelSerieById, extractSerieData, getMarvelCharactersBySerie, getMarvelCharactersByComic, getMarvelComicsByCharacter } from '../../../services';
import { CustomCard } from '../components/CustomCard';
import { PrincipalLayout } from '../layout/PrincipalLayout';
import { Grid } from '@mui/material';

export const IndividualPage = () => {
  const { id, tipo } = useParams(); // Obtener los parámetros de la URL
  const navigate = useNavigate();

 
  

  const [hero, setHero] = useState(null); // Estado para almacenar la información del héroe o cómic
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const [searchResults, setSearchResults] = useState([]);

  const [tipoDetalle, setTipoDetalle] = useState('heroe');

  // Función para obtener el personaje o cómic específico
  const getIndividualRegistry = async (valor, tipo) => {
    try {
      console.log(`Buscando por ${tipo}: ${valor}`);

      let result = null;
      let detalle=null;

      if (tipo === 'heroe') {
        // Llamada a la API para personajes
        const response = await getMarvelCharacterById(valor);
        const characters = extractCharacterData(response); // Procesar los datos
        result = characters[0]; // Tomamos el primer héroe de los resultados

         // buscando detalle
         const det=await getMarvelComicsByCharacter(result.id);
         detalle= extractComicData(det);
        
         setTipoDetalle('comic');
      } else if (tipo === 'comic') {
        // Llamada a la API para cómics
        const response = await getMarvelComicById(valor);
        const comics = extractComicData(response); // Procesar los datos
        result = comics[0]; // Tomamos el primer cómic de los resultados

         // buscando detalle
         const det=await getMarvelCharactersByComic(result.id);
         detalle= extractCharacterData(det);
         setTipoDetalle('heroe');
      }else if (tipo === 'serie') {
        // Llamada a la API para cómics
        const response = await getMarvelSerieById(valor);
        const series = extractSerieData(response); // Procesar los datos
        result = series[0]; // Tomamos el primer cómic de los resultados

        // buscando detalle
        const det=await getMarvelCharactersBySerie(result.id);
        detalle= extractCharacterData(det);
        setTipoDetalle('heroe');
      }

      setSearchResults(detalle);

      if (result) {
        setHero(result); // Almacenar en el estado
      } else {
        setError(`No se encontró el ${tipo}`); // Si no se encuentra el héroe o cómic, mostrar un error
      }
    } catch (err) {
      setError(err.message || 'Error al obtener los datos'); // Manejar cualquier error
    } finally {
      setLoading(false); // Terminar el estado de carga
    }
  };

  useEffect(() => {
    if (searchResults.length > 0) {
        console.log('Resultados actualizados:', searchResults);
    }
  }, [searchResults]); 

  // Realizar la consulta cuando cambia el `id` o `tipo`
  useEffect(() => {
    setLoading(true); // Empezar cargando cuando el id cambie
    getIndividualRegistry(id, tipo); // Llamar a la función para obtener los datos
  }, [id, tipo]); // Dependencias en `id` y `tipo`

  // Si hay un error, redirige
  if (error) {
    //return <Navigate to="/marvel" />; // Redirige a la página principal si hay un error
  }

  if (loading) {
    return <div>Loading...</div>; // Puedes poner un spinner o algo visual mientras se carga
  }

  // Si no se encuentra el héroe/comic, redirigir
  if (!hero) {
    return <Navigate to="/" />; // Redirige si no hay datos
  }

  // Función para regresar
  const onNavigateBack = () => {
    navigate(-1); // Navega hacia atrás
  };

  return (
    <PrincipalLayout>
      <div className="row mt-5">
        {hero ? (
          <>
            <div className="col-4">
              <img
                src={hero.image} // Asegúrate de que `hero.image` sea válido
                alt={hero.name}
                className="img-thumbnail animate__animated animate__fadeInLeft"
              />
            </div>

            <div className="col-8">
              <h5 className="mt-3">Description</h5>
              <p>{hero.description}</p>

              <button className="btn btn-outline-primary" onClick={onNavigateBack}>
                Regresar
              </button>
            </div>
          </>
        ) : (
          <div>cargando...</div>
        )}
      </div>

      <Grid item xs={12} md={8} mt={4}>
        <h4> {tipo ==='heroe' ? 'comics del heroe':'Personajes'}</h4>
      <Grid container spacing={2}>
            {searchResults.map((hero) => (
              <Grid item xs={12} sm={6} md={4} key={hero.id}>
                <CustomCard
                key={hero.id}
                 title={hero.name}
                 description={hero.description}
                 image={hero.image}
                 altText={hero.name}
                 link={`/view/${hero.id}/${tipoDetalle}`}
                 
                />
              </Grid>
            ))}
          </Grid>
      </Grid>
    </PrincipalLayout>
  );
};
