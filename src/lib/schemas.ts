import { z } from "zod"

export const loginSchema = z.object({
    email: z.email("Digite um e-mail válido!").toLowerCase(),
    password: z.string("Digite uma senha válida!").min(1, { error: "Campo obrigatório!" })
}, { error: "E-mail ou senha inválidos" })

export type LoginSchema = z.infer<typeof loginSchema>

export const createProjectSchema = z.object({
    projectName: z.string({ error: "Insira um nome válido!" }).min(2, { error: "Campo obrigatório!" }),
    slug: z.string({ error: "Insira um slug válido!" }).min(2, { error: "Campo obrigatório!" }),
    description: z.string({ error: "Insira uma descrição válida!" }).min(10, { error: "Campo obrigatório!" }),
    projectLink: z.url({ error: "URL inválida!" }),
    githubLink: z
        .url({ protocol: /^https$/, hostname: /^github\.com$/, error: "URL inválida!" })
        .optional()
        .or(z.literal(""))
        .transform((val) => (val === "" ? undefined : val)),
    image: z.object({
        name: z.string({ error: "Insira um nome para a imagem!" }).min(2, { error: "Campo obrigatório!" }).toLowerCase(),
        imageLink: z.url({ error: "Insira uma URL válida!" })
    }),
    technologyIds: z.array(z.string()).min(1, { error: "Ao menos uma tecnologia deve ser selecionada!" }).min(1)
})

export type CreateProjectSchema = z.infer<typeof createProjectSchema>

const optionalString = z
    .string()
    .transform((v) => (v === '' ? undefined : v))
    .optional();

const optionalUrl = z
    .string()
    .transform((v) => (v === '' ? undefined : v))
    .pipe(z.url())
    .optional();

export const editProjectSchema = z.object({
    projectName: optionalString,
    slug: optionalString,
    description: optionalString,

    projectLink: optionalUrl,

    githubLink: z
        .url({ protocol: /^https$/, hostname: /^github\.com$/, error: "URL inválida!" })
        .optional()
        .or(z.literal(""))
        .transform((val) => (val === "" ? undefined : val)),

    image: z.object({
        name: optionalString,
        imageLink: optionalUrl
    }),

    technologyIds: z
        .array(z.string())
        .min(1, { error: 'Ao menos uma tecnologia deve ser selecionada!' })
        .optional()
});

export type EditProjectSchema = z.infer<typeof editProjectSchema>