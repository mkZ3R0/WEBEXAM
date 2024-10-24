import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Mainpage() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-700">
      <Navbar />
      {/* Add content here */}
      <main class="mb-auto h-10 bg-grey-500">Content</main>

      <Footer className="mt-auto"/>
    </div>
  )
}

export default Mainpage
