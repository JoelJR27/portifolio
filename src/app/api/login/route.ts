import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const cookiesStore = await cookies()

    const { email, password } = body

    const response = await fetch(`${process.env.API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        credentials: "include",
        mode: "cors",
        body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if (!data.token) return NextResponse.json({
        message: data.message || "Erro ao autenticar usuário."
    })

    cookiesStore.set("token", data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 2)
    })

    return NextResponse.json({
        success: true,
        data
    })
}
