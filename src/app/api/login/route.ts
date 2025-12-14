
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()

    const { email, password } = body

    const res = await fetch(`${process.env.API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        credentials: "include",
        mode: "cors",
        body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (!data.token) return NextResponse.json({
        message: data.message || "Erro ao autenticar usuário."
    })

    await cookies().then(response => response.set("token", data.token, {
        expires: Date.now() + 1000 * 60 * 60 * 2
    }))

    return NextResponse.json({
        success: true,
        data
    })
}