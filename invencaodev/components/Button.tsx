import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  width?: "full" | "auto" | "fit";
  variant?: "primary" | "outline";
}

const Button = ({
  label,
  href,
  size = "md",
  width = "auto",
  variant = "primary",
  ...props
}: ButtonProps) => {
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
    primary: "border border-primary bg-primary text-white hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };

  // Classes combinadas
  const className = `
    inline-flex items-center justify-center rounded-md font-medium
    ${sizeClasses[size]}
    ${widthClasses[width]}
    ${variantClasses[variant]}
    ${props.className || ""}
  `;

  // Renderização condicional
  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {label}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {label}
    </button>
  );
};

export default Button;
