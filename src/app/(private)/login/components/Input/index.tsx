interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  required?: boolean;
}

export default function Input({ name, type = 'text', required = false, ...props }: InputProps) {
  return (
    <>
      <input
        className="focus:border-blue focus:ring-blue w-full rounded-md border border-gray/10 bg-white/10 px-4 py-3 font-roboto-flex text-gray transition placeholder:text-gray/50 focus:ring-1 focus:outline-none dark:border-white/10 dark:bg-black/10 dark:text-white dark:placeholder:text-white/50"
        id={name}
        name={name}
        type={type}
        {...props}
        required={required}
      />
    </>
  );
}
