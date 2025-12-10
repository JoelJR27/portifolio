'use client';

import { useState } from 'react';
import ActionButtons from '../ActionButtons';
import ModalRoot from '../ModalRoot';
import Form from '@/components/Form';
import { editExperience } from '../../actions/editExperiences';
import Label from '@/app/(private)/login/components/Label';
import Input from '@/app/(private)/login/components/Input';

interface EditExperienceModalProps {
  identifier: string;
}

export default function EditExperienceModal({
  identifier
}: EditExperienceModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <ModalRoot closeModal={() => setIsOpen(false)} itemClass="experiência">
          <Form
            action={async (formData: FormData) => {
              try {
                editExperience(formData, identifier);
              } finally {
                setIsOpen(false);
              }
            }}
          >
            <Label htmlFor="title">Título:</Label>
            <Input
              name="title"
              id="title"
              placeholder="Título da experiência"
            />
            <Label htmlFor="description">Descrição:</Label>
            <textarea
              className="focus:border-blue focus:ring-blue w-full rounded-md border border-gray/10 bg-white/10 px-4 py-3 font-roboto-flex text-gray transition placeholder:text-gray/50 focus:ring-1 focus:outline-none dark:border-white/10 dark:bg-black/10 dark:text-white dark:placeholder:text-white/50"
              rows={4}
              name="description"
              id="description"
              placeholder="Descrição do projeto"
            ></textarea>
            <Label htmlFor="startedAt">Data de início:</Label>
            <Input name="startedAt" id="startedAt" type="date" />
            <Label htmlFor="finishedAt">Data de fim:</Label>
            <Input name="finishedAt" id="finishedAt" type="date" />
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
