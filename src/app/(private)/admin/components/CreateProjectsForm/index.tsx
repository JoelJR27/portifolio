import Input from '@/app/(private)/login/components/Input';
import Label from '@/app/(private)/login/components/Label';
import Accordion from '@/components/Accordion';
import Form from '@/components/Form';
import { createProject } from '../../actions/createProject';

export default function CreateProjectsForm() {
  return (
    <Accordion>
      <Form action={createProject}>
        <Label htmlFor="projectName">Nome do Projeto</Label>
        <Input name="projectName" id="projectName" type="text" />
        <Label htmlFor="slug">Slug</Label>
        <Input name="slug" id="slug" type="text" />
        <Label htmlFor="description">Descrição do Projeto</Label>
        <textarea
          className="focus:border-blue focus:ring-blue w-full rounded-md border border-gray/10 bg-white/10 px-4 py-3 font-roboto-flex text-gray transition placeholder:text-gray/50 focus:ring-1 focus:outline-none dark:border-white/10 dark:bg-black/10 dark:text-white dark:placeholder:text-white/50"
          rows={4}
          name="description"
          id="description"
        ></textarea>
        <Label htmlFor="projectLink">Link da demo</Label>
        <Input name="projectLink" id="projectLink" type="text" />
        <Label htmlFor="githubLink">Link do GitHub</Label>
        <Input name="githubLink" id="githubLink" type="text" />

        <Label htmlFor="projectImageName">Nome da imagem</Label>
        <Input name="projectImageName" id="projectImageName" type="text" />
        <Label htmlFor="imageLink">Link da imagem</Label>
        <Input name="imageLink" id="imageLink" type="text" />
        <Label htmlFor="technologies">
          Tecnologias (IDs separadas por vírgula)
        </Label>
        <Input name="technologies" id="technologies" type="text" />
      </Form>
    </Accordion>
  );
}
