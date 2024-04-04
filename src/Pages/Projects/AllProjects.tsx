import SeriesCard from "../../Components/Projects/ProjectCard";

import { project_1 } from '../../../public/project_data/project_1.ts'
import { project_2 } from '../../../public/project_data/project_2.ts'

const projectData = [project_1, project_2];

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