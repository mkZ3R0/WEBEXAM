import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MovieListContainer from '../components/MovieListContainer'
import { favoritesContext } from '../context/context'
import {useContext} from 'react'

function Favorites() {
    const favList = useContext(favoritesContext)
  return (
    <div className="min-h-screen flex flex-col bg-gray-700">
      <Navbar />

      {favList.length===0 && <div className="text-center text-red-400 text-2xl sm:text-5xl mt-8">
        <strong>No Favorites Exists</strong>
        </div>}

      <div className="flex-grow">
        <MovieListContainer movies={favList}/>
      </div>

      <Footer className="mt-auto"/>
    </div>
  )
}

export default Favorites