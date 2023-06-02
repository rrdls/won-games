import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-white rounded text-sm font-medium inline-flex items-center justify-center  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 transition-colors ",
  {
    variants: {
      variant: {
        pink: "bg-button hover:bg-buttonHover",
        green: "bg-secondary hover:opacity-90",
      },
      size: {
        small:
          "py-[0.7rem] px-[3.0rem] text-xs [&>svg]:w-[1.5rem] [&>svg]:h-[1.5rem]",
        medium:
          "py-[1.0rem] px-[3.0rem] text-sm [&>svg]:w-[1.6rem] [&>svg]:h-[1.6rem]",
        large:
          "py-[1.3rem] px-[5.2rem] text-base [&>svg]:w-[2.0rem] [&>svg]:h-[2.0rem]",
      },
    },
    defaultVariants: {
      variant: "pink",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      variant,
      iconLeft,
      iconRight,
      fullWidth,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ size, variant, className }), {
          "w-full": fullWidth,
          "px-[0.8rem] py-[0.6rem]": !children,
        })}
        data-testid="button"
        ref={ref}
        {...props}
      >
        {!!iconLeft && iconLeft}
        <span
          data-testid="children"
          className={cn({ "ml-[0.8rem] mr-[0.8rem]": !!children })}
        >
          {children}
        </span>
        {!!iconRight && iconRight}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
