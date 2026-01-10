"use server"

import { revalidateTag } from "next/cache";

export async function deleteItem(endpoint: string, identifier: string, tagToRevalidate: string) {

    await fetch(`${process.env.API_URL}/${endpoint}/${identifier}`, {
        method: "DELETE",
    });

    revalidateTag(tagToRevalidate)
}