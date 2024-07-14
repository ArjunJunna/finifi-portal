import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonLoadingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export function ButtonLoading({ children, ...props }: ButtonLoadingProps) {
  return (
    <button disabled {...props}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {children || "Please wait"}
    </button>
  );
}
