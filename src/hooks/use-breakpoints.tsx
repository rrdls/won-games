"use client";
import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export interface Breakpoints {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xl2: boolean;
}

const BreakpointsContext = createContext<Breakpoints | null>(null);

export interface BreakpointsProviderProps {
  children: React.ReactNode;
}

const createQuery = (breakpointValue: string) => {
  return `(max-width: ${breakpointValue})`;
};

function BreakpointsProvider({ children }: BreakpointsProviderProps) {
  const screens: any = fullConfig.theme?.screens;
  const sm = useMediaQuery({ query: createQuery(screens.sm.max) });
  const md = useMediaQuery({ query: createQuery(screens.md.max) });
  const lg = useMediaQuery({ query: createQuery(screens.lg.max) });
  const xl = useMediaQuery({ query: createQuery(screens.xl.max) });
  const xl2 = useMediaQuery({ query: createQuery(screens["2xl"].max) });

  return (
    <BreakpointsContext.Provider value={{ sm, md, lg, xl, xl2 }}>
      {children}
    </BreakpointsContext.Provider>
  );
}

const useBreakpoints = () => useContext<Breakpoints | null>(BreakpointsContext);

export { BreakpointsProvider, useBreakpoints };
