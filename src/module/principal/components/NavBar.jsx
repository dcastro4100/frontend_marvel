import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

import Fade from '@mui/material/Fade';
//import { Logo } from "../../ui/components/Logo";
import { AppBar, Avatar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { Logo } from "../../../components";


export const NavBar = () => {

    let navigate = useNavigate();


    const handleClickRepo = (event) => {
        setAnchorElRepo(event.currentTarget);
    };

    const handleClickCons = (event) => {
        setAnchorElCons(event.currentTarget);
    };


    const clickInicio = (event) => {
        let path = '/';
        navigate(path);
    }

    const clicPersonaje = (event) => {
        let path = '/personaje';
        navigate(path);
    }

    const clicComic = (event) => {
        let path = '/comic';
        navigate(path);
    }

    const clicSerie = (event) => {
        let path = '/serie';
        navigate(path);
    }

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#333' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo: alineado a la izquierda */}
                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        <Logo />
                    </Box>

                    {/* Menú: centrado */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            id="fade-buttonInicio"
                            onClick={clickInicio}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Inicio
                        </Button>
                        <Button
                            id="fade-buttonBoveda"
                            onClick={clicPersonaje}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Personaje
                        </Button>
                        <Button
                            id="fade-buttonReportes"
                            onClick={clicComic}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Comics
                        </Button>
                        <Button
                            id="fade-buttonSeries"
                            onClick={clicSerie}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Series
                        </Button>
                    </Box>

                    
                </Toolbar>
            </Container>
        </AppBar>

    )
}
