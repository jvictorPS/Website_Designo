/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import ProjectCard from '../../atoms/ProjectCard'
import { ContainerProjects } from './style'


export default function ProjectsSection({projects}) {
    return (
        <ContainerProjects>
            {projects.map(
                project => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                    />
                )
            )}
        </ContainerProjects>
    )
}