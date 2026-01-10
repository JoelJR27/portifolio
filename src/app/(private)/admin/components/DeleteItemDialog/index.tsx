'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { Loader2, Trash2 } from 'lucide-react';
import { deleteItem } from '../../actions/deleteItem';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import ErrorMessage from '@/components/ErrorMessage';

interface DeleteItemDialogProps {
  itemName: string;
  infos: {
    endpoint: string;
    identifier: string;
    tag: string;
  };
}

const editItemSchema = z.object({ delete: z.literal('quero-deletar') });

export default function DeleteItemDialog({
  itemName,
  infos
}: DeleteItemDialogProps) {
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    reset
  } = useForm({ resolver: zodResolver(editItemSchema) });

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" className="cursor-pointer">
            <Trash2 /> Excluir projeto
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmação</DialogTitle>
          </DialogHeader>

          <DialogDescription className="p-0 text-[16px]">
            Deseja mesmo excluir o projeto{' '}
            <strong className="text-destructive">{itemName}</strong>?
          </DialogDescription>
          <form
            action={() =>
              deleteItem(infos.endpoint, infos.identifier, infos.tag)
            }
            className="flex w-full flex-col gap-2"
          >
            <p className="p-0 text-sm">Digite abaixo "quero-deletar"</p>
            <Input id="delete-item" {...register('delete')} />
            {errors.delete && (
              <ErrorMessage>{errors.delete.message}</ErrorMessage>
            )}
            <DialogFooter className="py-2">
              <Button
                variant={'destructive'}
                className="cursor-pointer hover:opacity-85"
                disabled={!isValid}
                aria-disabled={!isValid}
              >
                {isSubmitting ? <Loader2 className='animate-spin' /> : 'Confirmar exclusão'}
              </Button>
              <DialogClose asChild>
                <Button
                  variant={'link'}
                  className="cursor-pointer text-foreground"
                  onClick={() => reset()}
                >
                  Cancelar
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
