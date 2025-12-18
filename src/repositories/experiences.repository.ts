import { api } from '@/utils/api'
import { Experience } from '@/types/Experience'

export const ExperiencesRepository = {
    getAll: () =>
        api<Experience[]>('/experiences', {
            tags: ['experiences']
        })
}