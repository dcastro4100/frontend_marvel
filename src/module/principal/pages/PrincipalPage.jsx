import { useEffect, useState } from "react";
import { PrincipalLayout } from "../layout/PrincipalLayout";
import bannerImage from '../../../assets/marvel-banner.png';
import imgComic from '../../../assets/comic.png';
import imgPersonaje from '../../../assets/personaje.png';
import imgSerie from '../../../assets/serie.png'
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { CustomCard } from "../components";


export const PrincipalPage = () => {


    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);


    return (
        <PrincipalLayout>

            {/* Banner */}
            <Box sx={{ width: '100%', mb: 4, ml: 0, mr: 0 }}>
                <img
                    src={bannerImage}
                    alt="Marvel Banner"
                    style={{
                        width: '100%',
                        maxHeight: '400px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                    }}
                />
            </Box>

            {/* Cards */}
            <Grid container spacing={4} justifyContent="center">
                
                <Grid item xs={12} sm={6} md={4}>

                    <CustomCard
                        title="Personaje"
                        description="Explora los personajes más icónicos de Marvel."
                        image={imgPersonaje}
                        altText="Personaje"
                        link={"/personaje"}
                    />

                </Grid>

                
                <Grid item xs={12} sm={6} md={4}>


                    <CustomCard
                        title="Comic"
                        description="Descubre los cómics más épicos."
                        image={imgComic}
                        altText="Comic"
                        link={"/comic"}
                    />


                </Grid>

                
                <Grid item xs={12} sm={6} md={4}>


                    <CustomCard
                        title="Serie"
                        description="Mira las mejores series de Marvel."
                        image={imgSerie}
                        altText="Serie"
                        link={"/serie"}
                    />


                </Grid>
            </Grid>

        </PrincipalLayout>
    );
}