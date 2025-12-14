import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
    const baseUrl = process.env.API_URL;

    const { searchParams } = new URL(request.url);

    const id = searchParams.get('id');

    if (!id) {
        return new NextResponse('ID é obrigatório', { status: 400 });
    }

    const response = await fetch(`${baseUrl}/technologies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    if (data.status === 'error') {
        return new NextResponse(JSON.stringify(data.message), { status: response.status });
    }
    console.log("Resposta da API:", data);

    return new NextResponse("Tecnologia deletada com sucesso", { status: 200 });
}