import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getMarvelCharacterById, getMarvelComicById, extractCharacterData, extractComicData } from '../../../services';
import { CustomCard } from '../components/CustomCard';
import { PrincipalLayout } from '../layout/PrincipalLayout';

export const IndividualPage = () => {
  const { id, tipo } = useParams(); // Obtener los parámetros de la URL
  const navigate = useNavigate();

  const [hero, setHero] = useState(null); // Estado para almacenar la información del héroe o cómic
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para obtener el personaje o cómic específico
  const getIndividualRegistry = async (valor, tipo) => {
    try {
      console.log(`Buscando por ${tipo}: ${valor}`);

      let result = null;

      if (tipo === 'heroe') {
        // Llamada a la API para personajes
        const response = await getMarvelCharacterById(valor);
        const characters = extractCharacterData(response); // Procesar los datos
        result = characters[0]; // Tomamos el primer héroe de los resultados
      } else if (tipo === 'comic') {
        // Llamada a la API para cómics
        const response = await getMarvelComicById(valor);
        const comics = extractComicData(response); // Procesar los datos
        result = comics[0]; // Tomamos el primer cómic de los resultados
      }

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
    return <Navigate to="/marvel" />; // Redirige si no hay datos
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
    </PrincipalLayout>
  );
};
