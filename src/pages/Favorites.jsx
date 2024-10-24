import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import MovieListContainer from '../components/MovieListContainer'
import { favoritesContext } from '../context/context'
import {useContext} from 'react'

function Favorites() {
    const favList = useContext(favoritesContext)
  return (
    <div className="min-h-screen flex flex-col bg-gray-700">
      <Navbar />
      <SearchBar currentSearch={searchTerm} handleSearchClick={handleSearchClick} />

      {loading &&  <div className="flex flex-col items-center mt-8">
        <div className="animate-spin h-12 w-12 border-4 border-t-4 border-t-red-400 border-gray-300 rounded-full"></div>
        <div className="text-red-400 text-2xl sm:text-5xl mt-4">Loading</div>
    </div>}

      {!loading && noResults && <div className="text-center text-red-400 text-2xl sm:text-5xl mt-8">
        <strong>No Favorites Exists</strong>
        </div>}

      <div className="flex-grow">
        <MovieListContainer movies={favList}/>
      </div>

      <Footer className="mt-auto"/>
    </div>
  )
}