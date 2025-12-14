"use server"

import { revalidateTag } from "next/cache";

export async function deleteItem(endpoint: string, identifier: string, tagToRevalidate: string) {
    try {
        const response = await fetch(`${process.env.API_URL}/${endpoint}/${identifier}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        revalidateTag(tagToRevalidate)

        return data
    } catch (error: unknown) {
        console.error(error)
    }
}