import PageHeading from '../components/PageHeading'
import ProjectCard from '../components/ProjectCard'
import usePageTitle from '../hooks/usePageTitle'
import { projects } from '../data/projects'

export default function Projects() {
  usePageTitle('Projects')

  return (
    <div className="bg-band">
      <PageHeading eyebrow="Projects" title="My projects">
        A selection of class projects I built while learning web development.
      </PageHeading>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-20 pt-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
