'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { EditProjectSchema, editProjectSchema } from '@/lib/schemas';
import { Project } from '@/types/Project';
import { Technology } from '@/types/Technology';
import { zodResolver } from '@hookform/resolvers/zod';
import { Circle, Loader2, MoreHorizontal, Pencil } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DeleteItemDialog from '../DeleteItemDialog';
import { editProjectAction } from '../../actions/projects/editProjects';
import { getDirtyValues } from '@/utils/getDirtyValues';

interface EditProjectFormProps {
  project: Project;
  technologies: Technology[];
}

export default function EditProjectForm({
  project,
  technologies
}: EditProjectFormProps) {
  const currentTechnologiesIds = project.technologies.map(
    (tech) => tech.technologyId
  );

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitting, isDirty },
    setValue,
    reset
  } = useForm({
    resolver: zodResolver(editProjectSchema),
    defaultValues: {
      projectName: project.projectName,
      slug: project.slug,
      description: project.description,
      projectLink: project.projectLink,
      githubLink: project.githubLink,
      image: {
        name: project.image.name,
        imageLink: project.image.imageLink
      },
      technologyIds: currentTechnologiesIds
    }
  });

  async function onSubmit(data: EditProjectSchema) {
    const parsed = editProjectSchema.parse(data);

    const payload = getDirtyValues(dirtyFields, parsed);

    if (Object.keys(payload).length === 0) {
      return;
    }

    await editProjectAction(payload, project.slug);
  }

  const [technologyIds, setTechnologyIds] = useState<string[]>([
    ...currentTechnologiesIds
  ]);

  return (
    <Sheet
      onOpenChange={(open: boolean) => {
        if (!open) {
          reset({
            projectName: project.projectName,
            slug: project.slug,
            description: project.description,
            projectLink: project.projectLink,
            githubLink: project.githubLink,
            image: {
              name: project.image.name,
              imageLink: project.image.imageLink
            },
            technologyIds: currentTechnologiesIds
          });

          setTechnologyIds(currentTechnologiesIds);
        }
      }}
    >
      <SheetTrigger asChild>
        <Button variant={'secondary'}>
          <MoreHorizontal size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll p-4">
        <SheetHeader>
          <SheetTitle style={{ fontSize: 20 }}>
            Editar projeto: <i>{project.projectName}</i>
          </SheetTitle>
          <SheetDescription className="p-0 text-gray dark:text-[#fff]">
            Edite as informações do projeto.
          </SheetDescription>
        </SheetHeader>
        <form
          className="flex flex-col gap-2 p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Label htmlFor="projectName">Nome</Label>
          <Input id="projectName" {...register('projectName')} />
          <Label htmlFor="slug">Slug</Label>
          <Input id="slug" {...register('slug')} />
          <Label htmlFor="description">Descrição</Label>
          <Textarea id="description" {...register('description')} />
          <Label htmlFor="projectLink">Link da demo</Label>
          <Input id="projectLink" {...register('projectLink')} />
          <Label htmlFor="githubLink">Link do GitHub</Label>
          <Input id="githubLink" {...register('githubLink')} />
          <Label htmlFor="imageName">Nome da imagem</Label>
          <Input id="imageName" {...register('image.name')} />
          <Label htmlFor="imageLink">Link da imagem</Label>
          <Input id="imageLink" {...register('image.imageLink')} />
          <ul className="flex flex-wrap gap-1 py-2">
            {technologies.map((technology) => (
              <li key={technology.id}>
                <Toggle
                  variant={'outline'}
                  pressed={technologyIds.includes(technology.id)}
                  onPressedChange={(pressed) => {
                    setTechnologyIds((prev) => {
                      const updated = pressed
                        ? [...prev, technology.id]
                        : prev.filter((id) => id !== technology.id);

                      setValue('technologyIds', updated, {
                        shouldValidate: true,
                        shouldDirty: true
                      });

                      return updated;
                    });
                  }}
                  className="inline-flex data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-primary data-[state=on]:*:[svg]:stroke-primary"
                >
                  <Circle />
                  {technology.name}
                </Toggle>
              </li>
            ))}
            <li>
              {errors.technologyIds && (
                <ErrorMessage>{errors.technologyIds.message}</ErrorMessage>
              )}
              <Button
                className="mt-1"
                variant={'destructive'}
                onClick={(event) => {
                  event.preventDefault();
                  setTechnologyIds([]);
                  setValue('technologyIds', [], {
                    shouldValidate: true,
                    shouldDirty: true
                  });
                }}
              >
                Limpar tecnologias
              </Button>
            </li>
          </ul>
          <Button
            className="mt-2 cursor-pointer"
            aria-disabled={!isDirty || isSubmitting}
            disabled={!isDirty || isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Pencil /> Editar
              </>
            )}
          </Button>
        </form>
        <SheetFooter>
          <DeleteItemDialog
            itemName={project.projectName}
            infos={{
              endpoint: 'projects',
              identifier: project.slug,
              tag: 'projects'
            }}
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
