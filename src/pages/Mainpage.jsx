import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import {useState} from 'react'

function Mainpage() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = (newSearch) =>
  {
    setSearchTerm(newSearch);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-700">
      <Navbar />
      <SearchBar currentSearch={searchTerm} handleSearchClick={handleSearchClick} />
      <main class="mb-auto h-10 bg-grey-500">{searchTerm}</main>

      <Footer className="mt-auto"/>
    </div>
  )
}

export default Mainpage
