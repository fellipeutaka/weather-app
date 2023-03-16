import { ButtonHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "rounded-md bg-secondary px-6 py-2 font-bold outline-none ring-offset-2 ring-offset-primary transition hover:brightness-90 focus-visible:ring-2 focus-visible:ring-secondary",
        className
      )}
      {...props}
    />
  );
}
