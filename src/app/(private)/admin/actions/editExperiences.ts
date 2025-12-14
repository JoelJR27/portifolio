"use server"

import { revalidateTag } from "next/cache"

export async function editExperience(formData: FormData, identifier: string) {
    const baseUrl = process.env.API_URL

    const payload: {
        title?: string,
        description?: string,
        startedAt?: Date,
        finishedAt?: Date
    } = {}

    const title = formData.get("title") as string

    const description = formData.get("description") as string

    const startedAt = formData.get("startedAt") as string

    const finishedAt = formData.get("finishedAt") as string

    if (title.trim() !== "") payload.title = title
    if (description.trim() !== "") payload.description = description
    if (startedAt !== "") payload.startedAt = new Date(startedAt)

    if (finishedAt !== "") payload.finishedAt = new Date(finishedAt)

    await fetch(`${baseUrl}/experiences/${identifier}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)

    })

    revalidateTag("experiences")
}