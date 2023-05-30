import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-white rounded text-sm font-medium inline-flex  items-center justify-center  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 transition-colors ",
  {
    variants: {
      variant: {
        pink: "bg-button hover:bg-buttonHover",
        green: "bg-secondary hover:opacity-90",
      },
      size: {
        small: "py-[8px] px-[30px] text-xs [&>svg]:w-[15px] [&>svg]:h-[15px]",
        medium: "py-[10px] px-[32px] text-sm [&>svg]:w-[16px] [&>svg]:h-[16px]",
        large:
          "py-[13px] px-[52px] text-base [&>svg]:w-[20px] [&>svg]:h-[20px]",
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
          "px-[8px] py-[6px]": !children,
        })}
        data-testid="button"
        ref={ref}
        {...props}
      >
        {!!iconLeft && iconLeft}
        <span
          data-testid="children"
          className={cn({ "ml-[8px] mr-[8px]": !!children })}
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
