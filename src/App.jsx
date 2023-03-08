import React, { useState, useEffect, useRef, Suspense, lazy } from "react"; // Importamos los hooks que utilizaremos en el componente
import axios from "axios"; // Importamos axios para realizar las peticiones a la API
import CharacterList from "./components/charactersList/CharacterList";
import s from "./style.module.css"; // Importamos los estilos del componente
import Header from "./components/header/Header"; // Importamos el componente Header
import Loading from "./components/loading/Loading";
import MusicBtnStyled from "./components/musicBtnStyled/MusicBtnStyled";
import openingTheme from "./assets/audio/openingTheme.mp3"

function App() {
  const [characters, setCharacters] = useState([]); // Estado que almacenará los personajes obtenidos de la API
  const [searchTerm, setSearchTerm] = useState(""); // Estado que almacenará el término de búsqueda ingresado por el usuario
  const [page, setPage] = useState(1); // Estado que almacenará el número de página actual de la API a la que se está haciendo la petición
  const [loading, setLoading] = useState(true); // Estado que almacenará si se están cargando más personajes o no
  const [error, setError] = useState(false); // Estado que almacenará si hubo un error al obtener los personajes de la API
  const [filteredTerm, setFilteredTerm] = useState(""); // Estado que almacenará el término de búsqueda filtrado por el estado de filteredTerm
  const wrapperRef = useRef(null); // Referencia al contenedor que contiene la lista de personajes

  const [playing, setPlaying] = useState(false); // Estado que almacenará si el audio se está reproduciendo o no
  const [audio] = useState(new Audio(openingTheme)); // Estado que almacenará el objeto de audio que se reproducirá en el componente
  useEffect(() => {
    setTimeout(()=>
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`) // Realizamos una petición GET a la API de Rick and Morty utilizando el número de página actual
      .then((res) => {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...res.data.results,
        ]); // Agregamos los personajes obtenidos de la API al estado de characters
        setLoading(false); // Indicamos que ya no se están cargando más personajes
      })
      .catch((err) => {
        setError(true); // Indicamos que hubo un error al obtener los personajes de la API
        console.log("Hay un Error", err);
        setLoading(false); // Indicamos que ya no se están cargando más personajes
      }), 5000);
  }, [page]); // Este efecto se ejecutará cada vez que el valor de la variable page cambie

  useEffect(() => {
    playing ? (audio.loop = true && audio.play()) : audio.pause(); // Si el audio se está reproduciendo, lo reproducimos en loop. Si no, lo pausamos.
  }, [playing, audio]); // Este efecto se ejecutará cada vez que el valor de las variables playing o audio cambien

  const handleSearch = (searchTerm) => {
    // Función que se encarga de actualizar el estado de searchTerm cada vez que el usuario realiza una búsqueda
    setSearchTerm(searchTerm);
  };
  // Función que se ejecuta cada vez que se cambia el valor del input
  const handleChange = (event) => {
    setSearchTerm(event.target.value); // Actualiza el estado con el valor del input
  };
  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    handleSearch(searchTerm); // Ejecuta la función que recibe como prop para realizar la búsqueda
  };
  // Filtra la lista de personajes para mostrar solo aquellos que contengan el término de búsqueda (ignorando mayúsculas/minúsculas)
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Carga más personajes cuando el usuario llega al final del contenedor
  const handleScroll = () => {
    if (
      !loading &&
      wrapperRef.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Agrega un listener para el evento scroll y lo remueve al desmontar el componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  //Loading Page
  const showLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  // Renderiza los componentes de la aplicación
  return (
    <div ref={wrapperRef}>
      
      
            {/* StyledComponent Btn para reproducir/pausar la música */}
      <MusicBtnStyled
      onClick={() => setPlaying(!playing)}>
      {playing ? "Pause" : "Play"}  
      
      </MusicBtnStyled>   
      {/* Renderiza el componente Header */}
      

      {!loading? <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        searchTerm={searchTerm}
      />: <h1>Cargando Personajes...</h1>}
      
     
      {loading ? <Loading/> :filteredCharacters.length > 0 ? (
       

        <CharacterList
          characters={filteredCharacters}
          filteredTerm={filteredTerm}
        />
      ) : (
        <h1>No se encontraron personajes con el término de búsqueda "{searchTerm}
        ".</h1>
        

      )} 

      
    </div>
  );
}

export default App;
