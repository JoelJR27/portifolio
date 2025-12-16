export async function authenticate(formData: FormData) {
    const email = formData.get("email") as string

    const password = formData.get("password") as string

    const res = await fetch(`/api/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
    })

    if (!res.ok) {
        return { error: "Credenciais inválidas. Tente novamente." }
    }
}