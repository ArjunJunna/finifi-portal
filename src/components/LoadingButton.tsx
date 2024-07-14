import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonLoadingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export function ButtonLoading({ children, ...props }: ButtonLoadingProps) {
  return (
    <button
      className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700"
      disabled
      {...props}
    >
      <Loader2 className="h-4 w-4 animate-spin" />
    </button>
  );
}
