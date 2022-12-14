import React, { useState, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import MovieRequest from "../MovieRequest/MovieRequest";

const Movies = () => {
  const [movieList, setMoviesList] = useState([]);
  const [select, setSelect] = useState();
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3a9a79927df8eb09e2e3835016c92cc1"
    );
    const movies = await data.json();
    // console.log(movies);
    setMoviesList(movies.results);
    setFiltered(movies.results);
  };

  const handleSelect = (e) => {
    setSelect(e.target.name);
    setShowModal(!showModal);
    setShowModal(e.target.id);
    setDescription(e.target.title);
    // console.log("Description:", e.target.title);
    // console.log("Title:", e.target.name);
    // console.log("ID:", e.target.id);
  };

  return (
    <div className="w-full max-w-4xl flex flex-col m-auto">
      <Filter
        movieList={movieList}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <h2 className="text-green-500">MOVIES</h2>
      <ol className="text-white grid grid-cols-2 grid-rows-5 items-center justify-items-center">
        {filtered.map((item) => (
          <li
            className="text-gray-50 p-2 flex flex-col justify-center items-center"
            key={item.id}
          >
            <img
              src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
              alt="movie"
              className="cursor-pointer border rounded"
              id={item.id}
              name={item.title}
              title={item.overview}
              onClick={handleSelect}
              value={select}
            />
            <p className="w-48">{item.title}</p>
          </li>
        ))}
      </ol>
      {showModal && (
        <MovieRequest
          showModal={showModal}
          setShowModal={setShowModal}
          select={select}
          description={description}
          setDescription={setDescription}
        />
      )}
    </div>
  );
};

export default Movies;
