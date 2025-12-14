"use server"

import { revalidateTag } from "next/cache";

export async function createTechnology(formData: FormData) {

    const technologyName = formData.get('technologyName') as string;

    const technologyImage = formData.get('technologyImageName') as string;

    const technologyImageLink = formData.get('technologyImageLink') as string;

    if (!technologyName || !technologyImage || !technologyImageLink) {
        throw new Error('Todos os campos são obrigatórios');
    }
    const response = await fetch(`${process.env.API_URL}/technologies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: technologyName,
            image: {
                name: technologyImage,
                imageLink: technologyImageLink
            }
        })
    });

    if (!response.ok) {
        throw new Error('Erro ao criar tecnologia');
    }

    revalidateTag("technologies")
}
