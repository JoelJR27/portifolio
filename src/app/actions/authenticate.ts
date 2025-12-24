"use server"

import { LoginSchema } from "@/lib/schemas"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ZodSafeParseSuccess } from "zod"

export async function authenticate(formData: ZodSafeParseSuccess<LoginSchema>) {
    const baseUrl = process.env.API_URL

    const cookiesStore = await cookies();

    const { email, password } = formData.data

    const res = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        credentials: "include",
        mode: "cors",
        body: JSON.stringify({ email, password }),
    })

    const data: { status: string, message?: string, token?: string } = await res.json()

    if (!res.ok) {
        return { success: false, message: data.message }
    }

    if (res.ok && data.token) {
        cookiesStore.set("token", data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            expires: new Date(Date.now() + 1000 * 60 * 60 * 2)
        })
    }

    redirect("/admin")
}