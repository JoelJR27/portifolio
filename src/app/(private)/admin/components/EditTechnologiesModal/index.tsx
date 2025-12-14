'use client';
import { useState } from 'react';
import ActionButtons from '../ActionButtons';
import ModalRoot from '../ModalRoot';
import Form from '@/components/Form';
import Input from '@/app/(private)/login/components/Input';
import Label from '@/app/(private)/login/components/Label';
import { editTechnology } from '../../actions/editTechnology';


interface EditTechnologiesModalProps {
  identifier: string;
}

export default function EditTechnologiesModal({
  identifier
}: EditTechnologiesModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <ModalRoot itemClass="tecnologia" closeModal={() => setIsOpen(false)}>
          <Form
            buttonText="Salvar alterações"
            action={async (formData) => {
              try {
                editTechnology(formData, identifier);
              } finally {
                setIsOpen(false);
              }
            }}
          >
            <Label htmlFor="technologyName">Nome da tecnologia</Label>
            <Input
              name="technologyName"
              id="technologyName"
              placeholder="Nome da tecnologia"
              required={false}
            />
            <Label htmlFor="technologyName">Nome do logo</Label>
            <Input
              name="technologyLogoName"
              id="technologyLogoName"
              placeholder="Nome do logo"
              required={false}
            />
            <Label htmlFor="technologyLogo">Link do logo</Label>
            <Input
              name="technologyLogo"
              id="technologyLogo"
              placeholder="Link do logo"
              required={false}
            />
          </Form>
        </ModalRoot>
      )}
      <ActionButtons
        openEditModal={() => setIsOpen(true)}
        endpoint="technologies"
        identifier={identifier}
        tagToRevalidate="technologies"
      />
    </>
  );
}
