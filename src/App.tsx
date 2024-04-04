import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AllProjects from './Pages/Projects/AllProjects'
import ProjectPage from './Pages/Projects/ProjectPage.tsx'

import {name_1, slides_1} from '../public/project_data/project_1.ts'

export default function App() {

  return (
    <div className="min-h-full">
      <Navbar />
        <Routes>
          <Route path='/projekty' element={<AllProjects />} />
            <Route path='/projekty/1' element={<ProjectPage name={name_1} slides={slides_1} />} />
        </Routes>
      <Footer />
    </div>
  )
}

