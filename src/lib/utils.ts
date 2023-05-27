import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { useMediaQuery } from "react-responsive";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useBreakPoints() {
  const screens: any = fullConfig.theme?.screens;
  const sm = useMediaQuery({ query: `(max-width: ${screens.sm.max})` });
  const md = useMediaQuery({ query: `(max-width: ${screens.md.max})` });
  const lg = useMediaQuery({ query: `(max-width: ${screens.lg.max})` });
  const xl = useMediaQuery({ query: `(max-width: ${screens.xl.max})` });
  return { sm, md, lg, xl };
}
