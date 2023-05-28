import React, { forwardRef, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-semibold text-3xl relative w-fit flex items-center",
  {
    variants: {
      linePosition: {
        left: "before:content-[''] before:w-[7px] before:h-[31px] before:bg-secondary before:absolute before:left-[-12px]",
        bottom:
          "before:content-[''] before:w-[49px] before:h-[5px] before:bg-primary before:absolute before:left-0 before:bottom-[-10px]",
      },
      variant: {
        black: "text-black",
        white: "text-white",
      },
    },
    defaultVariants: {
      linePosition: "left",
      variant: "black",
    },
  }
);

export interface HeadingProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingVariants> {
  children: React.ReactNode;
}

const Heading = forwardRef<HTMLDivElement, HeadingProps>(
  ({ children, className, variant, linePosition, ...props }, ref) => {
    return (
      <h2
        role="heading"
        {...props}
        ref={ref}
        className={cn(headingVariants({ variant, linePosition, className }))}
      >
        {children}
      </h2>
    );
  }
);

Heading.displayName = "Heading";

export { Heading };
