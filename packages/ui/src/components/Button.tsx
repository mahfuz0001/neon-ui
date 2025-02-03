import React from "react";

export const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-neon text-black font-bold transition hover:bg-purple ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
