import React, {useState, useEffect} from 'react';

const Movies = () => {
  const [movieList, setMoviesList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=3a9a79927df8eb09e2e3835016c92cc1");
    const movies = await data.json();
    console.log(movies);
    setMoviesList(movies.results);
  }

  return (
    <div className="text-white md:w-auto flex flex-col flex-wrap w-full">
      <h2 className='text-green-500'>MOVIES:</h2>
      <ol className='text-white grid grid-cols-4 grid-rows-5 items-center justify-items-center'>
        {movieList.map((item) => (
          <li className='text-gray-50 p-4 flex flex-col justify-center items-center m-auto max-w-xs' key={item.id}>
            <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt="movie" className='w-32 h-32 cursor-pointer border'/>
            <p className='w-32'>{item.title}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Movies;