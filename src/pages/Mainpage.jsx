import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import MovieListContainer from '../components/MovieListContainer'
import {useState} from 'react'
import {MOVIES} from '../Data/Movies'

function Mainpage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState(MOVIES);

  const handleSearchClick = (newSearch) =>
  {
    setSearchTerm(newSearch);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-700">
      <Navbar />
      <SearchBar currentSearch={searchTerm} handleSearchClick={handleSearchClick} />
      <div className="flex-grow">
        <MovieListContainer movies={movieList}/>
      </div>

      <Footer className="mt-auto"/>
    </div>
  )
}

export default Mainpage
