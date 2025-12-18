import { api } from '@/utils/api'
import { Technology } from '@/types/Technology'

export const TechnologiesRepository = {
    getAll: () =>
        api<Technology[]>('/technologies', {
            tags: ['technologies']
        })
}