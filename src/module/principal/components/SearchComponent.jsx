import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
//import { getHeroesByName } from '../helpers'; // Importa tu función según tu proyecto
//import HeroCard from './HeroCard'; // Importa tu componente HeroCard
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import { extractCharacterData, extractComicData, getMarvelCharacters, getMarvelComics } from '../../../services';
import { useEffect, useState } from 'react';
import { CustomCard } from './CustomCard';

export const SearchComponent = ({titulo,subtitulo,labelresultado,placeholdertextbox,labelboton,tag,tipo}) => {


 
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);



  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  

  const showSearch = q.length === 0;
  const showError = q.length > 0 && searchResults.length === 0;

  const initialValues = {
    searchText: q,
  };

  const validationSchema = Yup.object({
    searchText: Yup.string()
      .required('The search field cannot be empty.')
      .min(2, 'Please enter at least 2 characters.'),
  });


  // Función para buscar personajes
  const searchCharacters = async (valor) => {
    try {

      console.log(`valor de variable tipo ${tipo}`);
      let characters=[];
      if (tipo==='heroe'){
        const responseheroe = await getMarvelCharacters(valor);
        characters = extractCharacterData(responseheroe);
      }

      if (tipo==='comic'){
        const responsecomic = await getMarvelComics(valor);
        characters = extractComicData(responsecomic);

        
      }

      console.log(`characters de ${tipo}`,characters);
        

        setSearchResults(characters);
    } catch (error) {
        console.error('Error al buscar personajes:', error);
    }
};

// Monitorea cuando `searchResults` cambia
useEffect(() => {
  if (searchResults.length > 0) {
      console.log('Resultados actualizados:', searchResults);
  }
}, [searchResults]); 



  const handleSubmit = (values) => {

    const { searchText } = values; 

    setSearchTerm(searchText); 
    searchCharacters(searchText);

    Swal.fire({
      title: 'Searching...',
      text: `Looking for heroes related to "${values.searchText}"`,
      icon: 'info',
      timer: 1500,
      showConfirmButton: false,
    });
    navigate(`?q=${values.searchText}`);
  };

  return (
    <Box sx={{ width: '100%', mb: 4, ml: 0, mr: 0 }}>
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {titulo}
      </Typography>
      <hr />

      <Grid container spacing={4}>
        {/* Search Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            {subtitulo}
          </Typography>
          <hr />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  name="searchText"
                  as={TextField}
                  
                  fullWidth
                  variant="outlined"
                  label={placeholdertextbox}
                  error={touched.searchText && Boolean(errors.searchText)}
                  helperText={touched.searchText && errors.searchText}
                  autoComplete="off"
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  {labelboton}
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>

        {/* Results Section */}
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            {labelresultado}
          </Typography>
          <hr />

          {showSearch && (
            <Alert severity="info" className="animate__animated animate__fadeIn">
              Search a {tag}
            </Alert>
          )}

          {showError && (
            <Alert severity="error" className="animate__animated animate__fadeIn">
              No {tag} with <b>{q}</b>
            </Alert>
          )}

          <Grid container spacing={2}>
            {searchResults.map((hero) => (
              <Grid item xs={12} sm={6} md={4} key={hero.id}>
                <CustomCard 
                key={hero.id}
                 title={hero.name}
                 description={hero.description}
                 image={hero.image}
                 altText={hero.name}
                 link={`/view/${hero.id}/${tipo}`}
                 
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};
