import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import SeriesCard from './Components/SeriesCard'
import ProjectsPage from './Pages/Projects/Projects'

function App() {

  return (
    <div className="min-h-full">
    <Navbar />
      <Routes>
        <Route path='/projekty' element={<ProjectsPage />} />
      </Routes>
    <Footer />
    </div>
  )
}

export default App
