'use server'

import { CreateProjectSchema } from "@/lib/schemas";
import { revalidateTag } from "next/cache";
import { ZodSafeParseSuccess } from "zod";

export async function createProject(parsedData: ZodSafeParseSuccess<CreateProjectSchema>) {

    const {
        data: { projectName, slug, description, projectLink, githubLink,
            image: {
                name, imageLink
            },
            technologyIds }
    } = parsedData

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
                name,
                imageLink
            },
            technologyIds
        })
    });

    revalidateTag("projects")
}