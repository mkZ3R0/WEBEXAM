import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import MovieListContainer from '../components/MovieListContainer'
import {useState, useEffect,} from 'react'
import {MOVIES} from '../Data/Movies'
import { FAV } from '../Data/Fav'

import { favoritesContext } from '../context/context'

function Mainpage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState(MOVIES);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fav, setFavorites]=useState(FAV)


  const handleSearchClick = (newSearch) =>
  {
    setSearchTerm(newSearch);
  };

  const fetchMovies = async () =>
    {
      setLoading(true);
      setMovieList([]);
  
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      let moviesToDisplay;
  
      if (searchTerm === "") {
        moviesToDisplay = MOVIES;
      } 
      else 
      {
        moviesToDisplay = MOVIES.filter(movie =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setMovieList(moviesToDisplay);
      setNoResults(moviesToDisplay.length === 0);
      setLoading(false);
    };
  
    useEffect(() => 
    {
      fetchMovies();
    }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-700">
      <favoritesContext.Provider value={fav}>
      <Navbar />
      <SearchBar currentSearch={searchTerm} handleSearchClick={handleSearchClick} />

      {loading &&  <div className="flex flex-col items-center mt-8">
        <div className="animate-spin h-12 w-12 border-4 border-t-4 border-t-red-400 border-gray-300 rounded-full"></div>
        <div className="text-red-400 text-2xl sm:text-5xl mt-4">Loading</div>
    </div>}

      {!loading && noResults && <div className="text-center text-red-400 text-2xl sm:text-5xl mt-8">
        <strong>No Such Movie Exists</strong>
        </div>}

      <div className="flex-grow">
        <MovieListContainer movies={movieList}/>
      </div>

      <Footer className="mt-auto"/>
      </favoritesContext.Provider>
    </div>
  )
}

export default Mainpage
