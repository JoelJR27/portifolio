import Input from '@/app/(private)/login/components/Input';
import Label from '@/app/(private)/login/components/Label';
import Accordion from '@/components/Accordion';
import Form from '@/components/Form';
import React from 'react';
import { createExperience } from '../../actions/createExperience';

export default function CreateExperienceForm() {
  return (
    <Accordion>
      <Form action={createExperience}>
        <Label htmlFor="title">Título:</Label>
        <Input name="title" id="title" />
        <Label htmlFor="description">Descrição:</Label>
        <textarea
          rows={4}
          name="description"
          id="description"
          className="focus:border-blue focus:ring-blue w-full rounded-md border border-gray/10 bg-white/10 px-4 py-3 font-roboto-flex text-gray transition placeholder:text-gray/50 focus:ring-1 focus:outline-none dark:border-white/10 dark:bg-black/10 dark:text-white dark:placeholder:text-white/50"
        />
        <Label htmlFor="startedAt">Data do começo:</Label>
        <Input name="startedAt" id="startedAt" type="date" />
        <Label htmlFor="finishedAt">Data do fim:</Label>
        <Input name="finishedAt" id="finishedAt" type="date" />
      </Form>
    </Accordion>
  );
}
