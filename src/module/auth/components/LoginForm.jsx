// src/components/LoginForm.js
import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Container,
  CssBaseline,
} from '@mui/material';

export const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Ingresar aplicativo héroes
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar Sesión
          </Button>
          <Box display="flex" justifyContent="space-between">
            <Link href="#" variant="body2">
              ¿Olvidaste tu contraseña?
            </Link>
            <Link href="#" variant="body2">
              {"¿No tienes una cuenta? Regístrate"}
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};


