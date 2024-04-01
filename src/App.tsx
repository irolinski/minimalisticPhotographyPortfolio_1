import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AllProjects from './Pages/Projects/AllProjects'
import ViewProject from './Pages/Projects/ViewProject'


function App() {

  return (
    <div className="min-h-full">
    <Navbar />
      <Routes>
        <Route path='/projekty' element={<AllProjects />} />
          <Route path='/projekty/1' element={<ViewProject />} />
      </Routes>
    <Footer />
    </div>
  )
}

export default App
