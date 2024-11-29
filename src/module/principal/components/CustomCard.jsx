import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const CustomCard = ({ title, description, image, altText = 'Image', link }) => {

    // Verifica si la imagen es una URL externa o una imagen local
    const isExternalImage = image && (image.startsWith('http://') || image.startsWith('https://'));

    return (
        <Card
            sx={{
                maxWidth: 300,
                mx: 'auto',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
            }}
        >
            {link ? (
                <Link to={link} style={{ textDecoration: 'none' }}>
                    <CardMedia
                        component="img"
                        height="340"
                        image={isExternalImage ? image : image}
                        alt={altText}
                    />
                </Link>) : (
                <CardMedia
                    component="img"
                    height="340"
                    // Si la imagen es externa, se usa directamente; si es local, se maneja adecuadamente
                    image={isExternalImage ? image : image} // Ruta local asumida en 'public/assets/images/'
                    alt={altText}
                />)
            }

            <CardContent>
                {link ? (
                    <Typography
                        variant="h6"
                        component="a"
                        href={link}
                        rel="noopener noreferrer"
                        sx={{
                            textDecoration: 'none',
                            color: 'inherit',
                            '&:hover': {
                                color: 'primary.main',
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        {title}
                    </Typography>
                ) : (
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                )}
                <Typography variant="body2" color="text.secondary">
                { description ? (description.length > 20 ? description.slice(0, 20) : description) : ""}

                </Typography>
            </CardContent>
        </Card>
    );
};
