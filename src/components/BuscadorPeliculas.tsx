import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Movie } from "../helpers/typeApi";

export const BuscadorPeliculas = () => {
  const [busqueda, setBusqueda] = useState("");
  const { fetchPeliculas, peliculas } = useFetch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchPeliculas(busqueda);
  };

  return (
    <div className="container">
      <h1 className="title">Buscador de Películas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busca tu película"
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit" className="search_button">
          Buscar
        </button>
      </form>
      <div className="movie-list">
        {peliculas.map((pelicula: Movie) => (
          <div key={pelicula.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt={pelicula.title}
            />
            <h2>{pelicula.title}</h2>
            <p>{pelicula.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
