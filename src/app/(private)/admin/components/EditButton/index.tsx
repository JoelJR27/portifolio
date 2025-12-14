'use client';

interface EditButtonProps {
  openEditModal: () => void;
}

export default function EditButton({ openEditModal }: EditButtonProps) {
  return (
    <button
      onClick={openEditModal}
      className="cursor-pointer rounded-md bg-primary p-[6px] text-sm font-semibold text-white transition hover:bg-primary/70"
    >
      Editar
    </button>
  );
}
