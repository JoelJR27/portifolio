import { ProjectsRepository } from '@/repositories/projects.repository'
import { ExperiencesRepository } from '@/repositories/experiences.repository'
import { TechnologiesRepository } from '@/repositories/technologies.repository'

export async function getPortfolioData() {
    const [projects, experiences, technologies] = await Promise.all([
        ProjectsRepository.getAll(),
        ExperiencesRepository.getAll(),
        TechnologiesRepository.getAll()
    ])

    return {
        projects,
        experiences,
        technologies
    }
}