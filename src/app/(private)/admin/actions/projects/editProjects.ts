"use server"

import { EditProjectSchema } from "@/lib/schemas";
import { revalidateTag } from "next/cache"

export async function editProjectAction(payload: Partial<EditProjectSchema>, slug: string) {
    const response = await fetch(`${process.env.API_URL}/projects/${slug}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const text = await response.text(); 
        console.error('API ERROR:', text);
        throw new Error('Erro ao editar projeto');
    }

    revalidateTag("projects")
}
