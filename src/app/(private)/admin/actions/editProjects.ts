"use server"

import { revalidateTag } from "next/cache"

export async function editProjectAction(formData: FormData, identifier: string) {
    const projectName = formData.get("projectName") as string

    const slug = formData.get("slug") as string

    const description = formData.get("description") as string

    const projectLink = formData.get("projectLink") as string

    const githubLink = formData.get("githubLink") as string

    const imageLink = formData.get("imageLink") as string

    const projectImageName = formData.get("projectImageName") as string


    const payload: {
        projectName?: string,
        slug?: string,
        description?: string,
        projectLink?: string,
        githubLink?: string,
        image?: {
            imageLink?: string,
            name?: string
        }
    } = {
    }

    if (projectName && projectName.trim() !== "") {
        payload['projectName'] = projectName
    }
    if (slug && slug.trim() !== "") {
        payload['slug'] = slug
    }
    if (description && description.trim() !== "") {
        payload['description'] = description
    }
    if (projectLink && projectLink.trim() !== "") {
        payload['projectLink'] = projectLink
    }
    if (githubLink && githubLink.trim() !== "") {
        payload['githubLink'] = githubLink
    }

    const imageData: {
        name?: string
        imageLink?: string,
    } = {}

    if (imageLink && imageLink.trim() !== "") {
        imageData.imageLink = imageLink
    }

    if (projectImageName && projectImageName.trim() !== "") {
        imageData['name'] = projectImageName
    }

    if (Object.keys(imageData).length > 0) {
        payload.image = imageData;
    }

    await fetch(`${process.env.API_URL}/projects/${identifier}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })

    revalidateTag("projects")
}