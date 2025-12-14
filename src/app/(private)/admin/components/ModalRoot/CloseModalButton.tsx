'use client';
import { X } from 'lucide-react';

interface CloseModalButtonProps {
  closeModal: () => void;
}

export default function CloseModalButton({
  closeModal
}: CloseModalButtonProps) {
  return (
    <button className="cursor-pointer" onClick={closeModal}>
      <X />
    </button>
  );
}
