import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-white rounded text-sm font-medium bg-button inline-flex gap-[8px] items-center justify-center  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 transition-colors hover:bg-buttonHover",
  {
    variants: {
      size: {
        small: "py-[8px] px-[30px] text-xs [&>svg]:w-[15px] [&>svg]:h-[15px]",
        medium: "py-[10px] px-[32px] text-sm [&>svg]:w-[16px] [&>svg]:h-[16px]",
        large:
          "py-[13px] px-[52px] text-base [&>svg]:w-[20px] [&>svg]:h-[20px]",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      asChild = false,
      iconLeft,
      iconRight,
      fullWidth,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ size, className }), {
          "w-full": fullWidth,
        })}
        data-testid="button"
        ref={ref}
        {...props}
      >
        {!!iconLeft && iconLeft}
        {children}
        {!!iconRight && iconRight}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
