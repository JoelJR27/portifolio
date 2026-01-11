'use client';
import ErrorMessage from '@/components/ErrorMessage';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { createProjectSchema, CreateProjectSchema } from '@/lib/schemas';
import { Technology } from '@/types/Technology';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2Icon, Circle, Loader, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createProject } from '../../actions/projects/createProject';

interface CreateProjectFormProps {
  technologies: Technology[];
}

export default function CreateProjectForm({
  technologies
}: CreateProjectFormProps) {
  const [technologyIds, setTechnologyIds] = useState<string[]>([]);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
    setValue,
    clearErrors,
    reset
  } = useForm({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      technologyIds: []
    }
  });

  async function onSubmit(data: CreateProjectSchema) {
    const parsedData = createProjectSchema.safeParse(data);
    if (!parsedData.success) return;
    await createProject(parsedData);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          Novo projeto <PlusIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll p-4">
        <SheetHeader>
          <SheetTitle style={{ fontSize: 20 }}>Criar projeto</SheetTitle>
          <SheetDescription className="p-0 text-gray dark:text-[#fff]">
            Insira as informações para criar um novo projeto.
          </SheetDescription>
        </SheetHeader>
        {isSubmitSuccessful && (
          <Alert>
            <CheckCircle2Icon style={{ color: 'var(--color-primary)' }} />
            <AlertTitle>Sucesso! Um novo projeto foi criado! </AlertTitle>
          </Alert>
        )}
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="projectName">Nome</Label>
          <Input id="projectName" {...register('projectName')} />
          {errors.projectName && (
            <ErrorMessage>{errors.projectName.message}</ErrorMessage>
          )}
          <Label htmlFor="slug">Slug</Label>
          <Input id="slug" {...register('slug')} />
          {errors.slug && <ErrorMessage>{errors.slug.message}</ErrorMessage>}
          <Label htmlFor="description">Descrição</Label>
          <Textarea id="description" {...register('description')} />
          {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
          )}
          <Label htmlFor="projectLink">Link da demo</Label>
          <Input id="projectLink" {...register('projectLink')} />
          {errors.projectLink && (
            <ErrorMessage>{errors.projectLink.message}</ErrorMessage>
          )}
          <Label htmlFor="githubLink">Link do GitHub (opcional)</Label>
          <Input id="githubLink" {...register('githubLink')} />
          {errors.githubLink && (
            <ErrorMessage>{errors.githubLink.message}</ErrorMessage>
          )}
          <Label htmlFor="imageName">Nome da imagem</Label>
          <Input id="imageName" {...register('image.name')} />
          {errors.image?.name && (
            <ErrorMessage>{errors.image.name.message}</ErrorMessage>
          )}
          <Label htmlFor="imageLink">Link da imagem</Label>
          <Input id="imageLink" {...register('image.imageLink')} />
          {errors.image?.imageLink && (
            <ErrorMessage>{errors.image.imageLink.message}</ErrorMessage>
          )}
          <Label>Tecnologias</Label>
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
          <SheetFooter>
            <Button
              aria-disabled={isSubmitting || !isValid}
              disabled={isSubmitting || !isValid}
              onClick={() => setValue('technologyIds', technologyIds)}
              className="disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {isSubmitting ? <Loader className="animate-spin" /> : 'Salvar'}
            </Button>
            <SheetClose asChild>
              <Button
                variant="outline"
                onClick={() => {
                  reset();
                  setTechnologyIds([]);
                  setValue('technologyIds', []);
                  clearErrors();
                }}
              >
                Cancelar
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
