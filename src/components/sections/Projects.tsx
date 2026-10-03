import { CONFIG } from '@/data/config';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';

export async function Projects() {
  const projects = CONFIG.projects
    .filter((project) => project.pinned)
    .map((project) => ({
      name: project.name,
      description: project.description,
      html_url: project.github,
      stargazers_count: 0,
      topics: project.tags,
      homepage: project.demo || null,
    }));

  return <ProjectsGrid projects={projects} />;
}
