'use client';

import { deleteItem } from '../../actions/deleteItem';

interface DeleteButtonProps {
  endpoint: string;
  identifier: string;
  tagToRevalidate: string;
}

export default function DeleteButton({
  endpoint,
  identifier,
  tagToRevalidate
}: DeleteButtonProps) {
  return (
    <button
      onClick={async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        deleteItem(endpoint, identifier, tagToRevalidate);
      }}
      className="cursor-pointer rounded-md bg-alert p-[6px] text-sm font-semibold text-white transition hover:bg-alert/70"
    >
      Deletar
    </button>
  );
}
