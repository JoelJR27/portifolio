import CloseModalButton from './CloseModalButton';

interface ModalRootProps {
  children: React.ReactNode;
  itemClass: string;
  closeModal: () => void;
}

export default function ModalRoot({
  children,
  closeModal,
  itemClass
}: ModalRootProps) {
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      >
        <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-scroll rounded-lg bg-white p-6 text-start dark:bg-gray/80">
          <header className="mb-4 flex items-center justify-between border-b border-b-white/30 pb-2">
            <h2 className="text-2xl text-gray dark:text-white">
              Editar {itemClass}
            </h2>
            <CloseModalButton closeModal={closeModal} />
          </header>
          {children}
        </div>
      </div>
    </>
  );
}
