import { api } from '@/utils/api'
import { Project } from '@/types/Project'

export const ProjectsRepository = {
    getAll: () =>
        api<Project[]>('/projects', {
            tags: ['projects']
        }),

    getBySlug: (slug: string) =>
        api<Project>(`/projects/${slug}`, {
            cache: 'no-store'
        })
}