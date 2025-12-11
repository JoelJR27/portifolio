"use server"

import { revalidateTag } from "next/cache"

export async function createExperience(formData: FormData) {

    const title = formData.get("title") as string

    const description = formData.get("description") as string

    const startedAt = new Date(formData.get("startedAt") as string)

    const finishedAt = new Date(formData.get("finishedAt") as string)

    await fetch(`${process.env.API_URL}/experiences`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            description,
            startedAt,
            finishedAt
        })
    })

    revalidateTag("experiences");
}