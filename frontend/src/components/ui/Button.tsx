import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover active:bg-primary-hover border-transparent shadow-lg shadow-primary/10",
  secondary:
    "bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-hover border-transparent",
  outline:
    "bg-transparent text-primary border-primary hover:bg-primary hover:text-white",
}

const sizes = {
  sm: "px-4 py-2 text-xs font-bold uppercase tracking-wider",
  md: "px-6 py-3 text-sm font-bold uppercase tracking-wider",
  lg: "px-8 py-4 text-sm font-black uppercase tracking-widest",
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", size = "md", className = "", children, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
