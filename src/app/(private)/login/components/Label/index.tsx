interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <>
      <label
        className="text-md font-semibold text-gray md:text-lg dark:text-white"
        htmlFor={htmlFor}
      >
        {children}
      </label>
    </>
  );
}
