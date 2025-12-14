import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';

interface ActionButtonsProps {
    endpoint: string;
    identifier: string;
    tagToRevalidate: string;
    openEditModal: () => void;
}

export default function ActionButtons({ endpoint, identifier, tagToRevalidate, openEditModal }: ActionButtonsProps) {
  return (
    <div className='flex gap-2 justify-end items-center'>
      <EditButton openEditModal={openEditModal} />
      <DeleteButton endpoint={endpoint} identifier={identifier} tagToRevalidate={tagToRevalidate} />
    </div>
  );
}
