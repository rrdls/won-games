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

const BreakpointsContext = createContext<Breakpoints | {}>({});

export interface BreakpointsProviderProps {
  children: React.ReactNode;
}

function BreakpointsProvider({ children }: BreakpointsProviderProps) {
  const screens: any = fullConfig.theme?.screens;
  const sm = useMediaQuery({ query: `(max-width: ${screens.sm.max})` });
  const md = useMediaQuery({ query: `(max-width: ${screens.md.max})` });
  const lg = useMediaQuery({ query: `(max-width: ${screens.lg.max})` });
  const xl = useMediaQuery({ query: `(max-width: ${screens.xl.max})` });
  const xl2 = useMediaQuery({ query: `(max-width: ${screens["2xl"].max})` });

  return (
    <BreakpointsContext.Provider value={{ sm, md, lg, xl, xl2 }}>
      {children}
    </BreakpointsContext.Provider>
  );
}

const useBreakpoints = () => useContext(BreakpointsContext);

export { BreakpointsProvider, useBreakpoints };
