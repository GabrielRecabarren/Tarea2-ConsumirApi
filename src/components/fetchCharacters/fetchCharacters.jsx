import React from 'react'

const fetchCharacters = ()=>{
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`) // Realizamos una petición GET a la API de Rick and Morty utilizando el número de página actual
      .then((res) => {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...res.data.results,
        ]); // Agregamos los personajes obtenidos de la API al estado de characters
        
          setLoading(true);
        }) // Indicamos que ya no se están cargando más personajes

      .catch((err) => {
        setError(true); // Indicamos que hubo un error al obtener los personajes de la API
        console.log("Hay un Error", err);
        setLoading(false); // Indicamos que ya no se están cargando más personajes
      });   
}

export default fetchCharacters