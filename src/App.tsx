import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import StartPage from "./Pages/Projects/StartPage.tsx";
import AllProjects from "./Pages/Projects/AllProjects";
import ProjectPage from "./Pages/Projects/ProjectPage.tsx";
import { projectData } from "../public/project_data/projectData_all.ts";
import AboutPage from "./Pages/Projects/AboutPage.tsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-full max-w-[1920px] mx-auto 3xl:relative 3xl:top-[12.5vh]">
      <Navbar location={location.pathname} />
      <div  className="">
      <Routes>
        <Route path="/" element={<Navigate replace to="/start" />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/projekty" element={<AllProjects />} />
        {projectData.map((p) => {
          return (
            <Route
              path={p.url.substring(2)}
              element={<ProjectPage name={p.name} slides={p.slides} />}
            />
          );
        })}
        <Route path="/o-mnie" element={<AboutPage />} />
        <Route path="*" element={<Navigate replace to="/start" />} />
        </Routes>
        </div>
      <Footer location={location.pathname} />
    </div>
  );
}
