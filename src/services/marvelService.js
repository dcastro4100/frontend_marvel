import backendApi from "../api/backendApi";


export const getMarvelCharacters = async (name = '') => {
    try {
        const params = name ? { nameStartsWith:name } : {};
        const response = await backendApi.get('/characters', { params });
        return response.data;
    } catch (error) {
        console.error('Error al consultar personajes:', error);
        throw error;
    }
};

export const getMarvelCharacterById = async (id = '') => {
    try {
        const params = { id };
        const response = await backendApi.get(`/characters/${id}`);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error al consultar personajes:', error);
        throw error;
    }
};


export const extractCharacterData = (responseData) => {
    if (!responseData || !responseData.data || !responseData.data.results) {
        console.error('Respuesta inválida:', responseData);
        return [];
    }

    // Mapear los resultados para extraer los atributos necesarios
    return responseData.data.results.map((character) => {
        const { id, name, description, thumbnail } = character;

        // Construir la URL completa de la imagen
        const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

        return {
            id,
            name,
            description,
            image: imageUrl,
        };
    });
};


export const getMarvelComics = async (name = '') => {
    try {
        const params = name ? { titleStartsWith:name } : {};
        const response = await backendApi.get('/comics', { params });
        return response.data;
    } catch (error) {
        console.error('Error al consultar comics:', error);
        throw error;
    }
};


export const extractComicData = (responseData) => {
    if (!responseData || !responseData.data || !responseData.data.results) {
        console.error('Respuesta inválida comic:', responseData);
        return [];
    }

    // Mapear los resultados para extraer los atributos necesarios
    return responseData.data.results.map((comic) => {
        const { id, name:title, description, thumbnail } = comic;

        // Construir la URL completa de la imagen
        const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

        return {
            id,
            name,
            description,
            image: imageUrl,
        };
    });
};

export const getMarvelComicById = async (id = '') => {
    try {
        const params = { id };
        const response = await backendApi.get(`/comics/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error al consultar comics:', error);
        throw error;
    }
};




export const getMarvelSeries = async (name = '') => {
    try {
        const params = name ? { titleStartsWith:name } : {};
        const response = await backendApi.get('/series', { params });
        return response.data;
    } catch (error) {
        console.error('Error al consultar comics:', error);
        throw error;
    }
};


export const extractSerieData = (responseData) => {
    if (!responseData || !responseData.data || !responseData.data.results) {
        console.error('Respuesta inválida serie:', responseData);
        return [];
    }

    // Mapear los resultados para extraer los atributos necesarios
    return responseData.data.results.map((comic) => {
        const { id, name:title, description, thumbnail } = comic;

        // Construir la URL completa de la imagen
        const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

        return {
            id,
            name,
            description,
            image: imageUrl,
        };
    });
};

export const getMarvelSerieById = async (id = '') => {
    try {
        const params = { id };
        const response = await backendApi.get(`/series/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error al consultar series:', error);
        throw error;
    }
};


export const getMarvelCharactersByComic = async (comicId) => {
    try {
        
        const response = await backendApi.get(`/comics/${comicId}/characters`);
        return response.data;
    } catch (error) {
        console.error('Error al consultar personajes:', error);
        throw error;
    }
};

export const getMarvelCharactersBySerie = async (serieId) => {
    try {
        
        const response = await backendApi.get(`/series/${serieId}/characters`);
        return response.data;
    } catch (error) {
        console.error('Error al consultar personajes:', error);
        throw error;
    }
};


export const getMarvelComicsByCharacter = async (characterId) => {
    try {
        
        const response = await backendApi.get(`/characters/${characterId}/comics`);
        return response.data;
    } catch (error) {
        console.error('Error al consultar personajes:', error);
        throw error;
    }
};