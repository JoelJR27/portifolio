import { z } from "zod"

export const loginSchema = z.object({
    email: z.email("Digite um e-mail válido!").toLowerCase(),
    password: z.string("Digite uma senha válida!").min(1, { error: "Campo obrigatório!" })
}, { error: "E-mail ou senha inválidos" })

export type LoginSchema = z.infer<typeof loginSchema>