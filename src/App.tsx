import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import StartPage from './Pages/Projects/StartPage.tsx'
import AllProjects from './Pages/Projects/AllProjects'
import ProjectPage from './Pages/Projects/ProjectPage.tsx'

import { projectData } from '../public/project_data/projectData_all.ts'
import AboutPage from './Pages/Projects/AboutPage.tsx'


export default function App() {

  return (
    <div className="min-h-full">
      <Navbar />
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/projekty' element={<AllProjects />} />
            {projectData.map(p => {
              return(
                <Route path={p.url.substring(2)} element={<ProjectPage name={p.name} slides={p.slides} />} />
              )
            })}
          <Route path='/o-mnie' element={<AboutPage />} />
        </Routes>
      <Footer />
    </div>
  )
}

