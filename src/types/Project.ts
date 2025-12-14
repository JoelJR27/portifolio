import { Technology } from "./Technology";

export type Project = {
    id: string,
    projectName: string,
    slug: string,
    description: string,
    projectLink: string,
    githubLink: string,
    image: {
        name: string,
        imageLink: string,
    },
    technologies: Array<{
        id: string,
        projectId: string,
        technologyId: string,
        technology: Technology,
    }>,
}

