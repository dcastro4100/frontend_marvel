import { Box, CssBaseline, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavBar, SideBar } from "../components";

const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.colors?.grey50
    },
    links: {
      padding: '0 50px',
      color: 'white',
      "&:hover": {
        textDecorationColor: "green",
        cursor:'pointer'
      }
    },

  }));

export const PrincipalLayout = ({ children }) => {

//#eef2f6

const Navbar = useStyles();

    return (
        <>
         
        
        <Box
        
        sx={{
            display: 'flex',
            width: '100vw', // Asegura que abarque el ancho completo
            overflow: 'hidden', // Opcional para evitar scroll horizontal
        }} className='animate__animated animate__fadeIn animate__faster'>

            <NavBar />
            <SideBar />      
    
            <Box
            
                component='main'
                sx={{ flexGrow: 1, p: 0 }}
            >
                <Toolbar />
                <Box
                
                component='main'
                className={Navbar.root}
                sx={{ flexGrow: 1, pt: 0, px: 0 }}
            >
                { children }
                </Box>    
            </Box>
        </Box>
        </>
      )
}