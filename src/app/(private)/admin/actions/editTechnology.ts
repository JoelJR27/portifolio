"use server"

import { Technology } from "@/types/Technology";
import { revalidateTag } from "next/cache";

export async function editTechnology(formData: FormData, identifier: string) {
    const technologyName = formData.get("technologyName") as string;
    const technologyLogoName = formData.get("technologyLogoName") as string;
    const technologyLogo = formData.get("technologyLogo") as string;

    const payload: Partial<Technology> = {};

    if (technologyName && technologyName.trim() !== "") {
        payload.name = technologyName;
    }


    const logoData: any = {};
    if (technologyLogoName && technologyLogoName.trim() !== "") {
        logoData.name = technologyLogoName;
    }
    if (technologyLogo && technologyLogo.trim() !== "") {
        logoData.imageLink = technologyLogo;
    }

    if (Object.keys(logoData).length > 0) {
        payload.logo = logoData;
    }

    const response = await fetch(
        `${process.env.API_URL}/technologies/${identifier}`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        }
    );

    if (!response.ok) {
        throw new Error("Erro ao editar tecnologia");
    }

    revalidateTag("technologies");
}