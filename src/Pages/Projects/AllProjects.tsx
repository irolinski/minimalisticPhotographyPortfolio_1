import SeriesCard from "../../Components/Projects/ProjectCard";

import { projectData } from '../../../public/project_data/projectData_all.ts'


export default function AllProjects () {
    return(
        <div className="flex flex-wrap mx-auto justify-around pt-4">
          {projectData.map(p => {
            return(
              <SeriesCard
              imageUrl={p.imgUrl}
              seriesTitle={p.name}
              seriesUrl={p.url}
              />
            )
          })}
      </div>
    )
}