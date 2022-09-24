import React, { useEffect } from "react";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, movieList }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movieList);
      return;
    }
    const filtered = movieList.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="w-full flex justify-center my-4">
      <button
        className="bg-slate-500 text-gray-50 w-28 mx-1 rounded hover:bg-slate-400 hover:text-black focus:bg-slate-400 focus:text-black"
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className="bg-slate-500 text-gray-50 w-28 mx-1 rounded hover:bg-slate-400 hover:text-black focus:bg-slate-400 focus:text-black"
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className="bg-slate-500 text-gray-50 w-28 mx-1 rounded hover:bg-slate-400 hover:text-black focus:bg-slate-400 focus:text-black"
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
