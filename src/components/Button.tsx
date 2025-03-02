import { cn } from "../lib/utils";

type ButtonProps = {
  children: string;
  darkMode?: boolean;
  classname?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

const Button = ({
  children,
  darkMode = false,
  classname = "",
  size = "md",
  onClick,
}: ButtonProps) => {
  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[size];

  const baseStyles = cn(
    "p-2 rounded-md hover:border-b-2 hover:border-l-2 hover:translate-y-0.5 shadow shadow-b-stone-50 hover:shadow-lg",
    sizeStyles
  );

  const darkModeStyles = "bg-stone-200 text-stone-900 hover:border-stone-300";
  const lightModeStyles = "bg-stone-800 text-stone-50 hover:border-stone-600";

  return (
    <button
      onClick={onClick}
      className={cn(
        baseStyles,
        darkMode ? darkModeStyles : lightModeStyles,
        classname
      )}
    >
      {children}
    </button>
  );
};

export default Button;
