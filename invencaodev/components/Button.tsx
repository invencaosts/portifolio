import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "sm" | "md" | "lg";
  width?: "full" | "auto" | "fit";
  variant?: "primary" | "outline";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = "md",
  width = "auto",
  variant = "primary",
  onClick,
  ...rest
}) => {
  // Classes baseadas nas props
  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  const widthClasses = {
    full: "w-full",
    auto: "w-auto",
    fit: "w-fit",
  };

  const variantClasses = {
    primary: "border border-primary bg-primary text-white",
    outline: "border border-primary text-secundary",
  };

  return (
    <button
      onClick={onClick}
      className={`
        cursor-pointer rounded-md font-medium transition-colors
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${widthClasses[width]}
        ${variantClasses[variant]}
      `}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
