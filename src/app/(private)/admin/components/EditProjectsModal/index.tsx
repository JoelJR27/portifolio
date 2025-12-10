'use client';
import { useState } from 'react';
import ModalRoot from '../ModalRoot';
import ActionButtons from '../ActionButtons';
import Form from '@/components/Form';
import { editProjectAction } from '../../actions/editProjects';
import Label from '@/app/(private)/login/components/Label';
import Input from '@/app/(private)/login/components/Input';

interface EditTechnologiesModalProps {
  identifier: string;
}

export default function EditProjectsModal({
  identifier
}: EditTechnologiesModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <ModalRoot itemClass="projeto" closeModal={() => setIsOpen(false)}>
          <Form
            action={async (formData) => {
              try {
                editProjectAction(formData, identifier);
              } finally {
                setIsOpen(false);
              }
            }}
            buttonText="Salvar alterações"
          >
            <Label htmlFor="projectName">Nome do projeto:</Label>
            <Input
              id="projectName"
              name="projectName"
              placeholder="Nome do projeto"
            />

            <Label htmlFor="slug">Slug:</Label>
            <Input id="slug" name="projectSlug" placeholder="Slug" />
            <Label htmlFor="description">Descrição do projeto:</Label>
            <textarea
              className="focus:border-blue focus:ring-blue w-full rounded-md border border-gray/10 bg-white/10 px-4 py-3 font-roboto-flex text-gray transition placeholder:text-gray/50 focus:ring-1 focus:outline-none dark:border-white/10 dark:bg-black/10 dark:text-white dark:placeholder:text-white/50"
              rows={4}
              name="description"
              id="description"
              placeholder="Descrição do projeto"
            ></textarea>

            <Label htmlFor="projectLink">Link do projeto:</Label>
            <Input
              id="projectLink"
              name="projectLink"
              placeholder="Link do projeto"
            />
            <Label htmlFor="githubLink">Link do GitHub:</Label>
            <Input
              id="githubLink"
              name="githubLink"
              placeholder="Link do GitHub"
            />

            <Label htmlFor="projectImageName">Nome da imagem:</Label>
            <Input
              id="projectImageName"
              name="projectImageName"
              placeholder="Nome da imagem"
            />

            <Label htmlFor="imageLink">Link da imagem:</Label>
            <Input
              id="imageLink"
              name="imageLink"
              placeholder="Link da imagem"
            />
          </Form>
        </ModalRoot>
      )}
      <ActionButtons
        openEditModal={() => setIsOpen(true)}
        endpoint="projects"
        identifier={identifier}
        tagToRevalidate="projects"
      />
    </>
  );
}
