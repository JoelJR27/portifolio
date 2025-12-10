import { Eye, EyeClosed } from "lucide-react";

interface ShowPasswordButtonProps {
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

export default function ShowPasswordButton({
  showPassword,
  setShowPassword,
}: ShowPasswordButtonProps) {
  return (
    <button
      className="absolute right-4 cursor-pointer transition-all duration-75 hover:scale-[1.2] top-1/2 -translate-y-1/2 text-purple text-primary"
      onClick={(event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword(!showPassword);
      }}
    >
      {showPassword ? <EyeClosed size={18} /> : <Eye size={18} />}
    </button>
  );
}
