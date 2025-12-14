'use server'

import { revalidateTag } from "next/cache";

export async function createProject(formData: FormData) {
    const projectName = formData.get('projectName') as string;

    const slug = formData.get('slug') as string;

    const description = formData.get('description') as string;

    const projectLink = formData.get('projectLink') as string;

    const githubLink = formData.get('githubLink') as string;

    const projectImageName = formData.get('projectImageName') as string;

    const imageLink = formData.get('imageLink') as string;

    const technologies = formData.get('technologies') as string;

    const techArray = technologies
        .split(',')
        .map((tech) => tech.trim())
        .filter((tech) => tech !== '');

   await fetch(`${process.env.API_URL}/projects`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            projectName,
            slug,
            description,
            projectLink,
            githubLink,
            image: {
                name: projectImageName,
                imageLink
            },
            technologyIds: techArray
        })
    });

    revalidateTag("projects")
}