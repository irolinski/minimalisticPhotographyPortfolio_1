import SeriesCard from "../../Components/Projects/ProjectCard";

import { projectData } from "../../../public/project_data/projectData_all.ts";

export default function AllProjects() {
  return (
    <div className="flex flex-wrap mx-auto justify-around md:p-16 pt-4">
      {projectData.map((p, i) => {
        return (
          <SeriesCard
            imageUrl={p.imgUrl}
            seriesTitle={p.name}
            seriesUrl={p.url}
            key={i}
          />
        );
      })}
    </div>
  );
}
