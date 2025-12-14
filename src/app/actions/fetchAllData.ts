"use server"
import { Experience } from "@/types/Experience"
import { FetchResponse } from "@/types/FetchResponse"
import { Project } from "@/types/Project"
import { Technology } from "@/types/Technology"

export async function fetchAllData() {
    const baseUrl = process.env.API_URL!

    const projectsResponse = await fetch(`${baseUrl}/projects`, {
        next: {
            tags: ["projects"]
        }
    })
    const projects: FetchResponse<Project[]> = await projectsResponse.json()

    async function fetchProjectBySlug(slug: string) {

        const response = await fetch(`${baseUrl}/projects/${slug}`, {
            headers: {
                'Cache-Control': 'no-store',
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()

        return data.data as Project
    }


    const experiencesResponse = await fetch(`${baseUrl}/experiences`, {
        next: {
            tags: ["experiences"]
        }
    })
    const experiences: FetchResponse<Experience[]> = await experiencesResponse.json()
    const expList = Array.isArray(experiences.data) ? [...experiences.data] : [];
    const lastExperience = expList.length > 0 ? experiences.data.splice(0, 1)[0] : null;

    const technologiesResponse = await fetch(`${baseUrl}/technologies`, {
        next: {
            tags: ["technologies"]
        }
    })
    const technologies: FetchResponse<Technology[]> = await technologiesResponse.json()


    return {
        projects: {
            status: projects.status,
            data: projects.data
        },
        fetchProjectBySlug,
        experiences: {
            status: experiences.status,
            data: experiences.data,
            lastExperience
        },
        technologies: {
            status: technologies.status,
            data: technologies.data
        }

    }
}