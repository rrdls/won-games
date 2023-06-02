import React from "react";
import { render, screen } from "@testing-library/react";
import { Logo, SVGProps } from ".";
import { BreakpointsProvider } from "@/hooks/use-breakpoints";

let useBreakpointsMock = jest.fn();

jest.mock("@/hooks/use-breakpoints", () => ({
  ...jest.requireActual("@/hooks/use-breakpoints"),
  useBreakpoints: () => useBreakpointsMock(),
}));

const renderComponent = (props: SVGProps) => {
  render(
    <BreakpointsProvider>
      <Logo {...props} />
    </BreakpointsProvider>
  );
};

describe("<Logo/>", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render a black label by default", () => {
    renderComponent({});

    const logoSVG = screen.getByLabelText("Won Games");
    expect(logoSVG).toHaveClass("text-black");
  });

  it("should render a white label when variant 'white' is passed", () => {
    renderComponent({ variant: "white" });
    const logoSVG = screen.getByLabelText("Won Games");
    expect(logoSVG).toHaveClass("text-white");
  });

  it("should have width 126px and height 38px when size is 'normal'", () => {
    renderComponent({ size: "normal" });
    const logoSVG = screen.getByLabelText("Won Games");
    expect(logoSVG).toHaveClass("w-[12.6rem] h-[3.8rem]");
  });

  it("should have width 200px and height 60px when size is 'large'", () => {
    renderComponent({ size: "large" });
    const logoSVG = screen.getByLabelText("Won Games");
    expect(logoSVG).toHaveClass("w-[20.0rem] h-[6.0rem]");
  });

  it("should render a normal logo without text if hideOnMobile and md are true", () => {
    useBreakpointsMock.mockReturnValue({
      md: true,
      sm: false,
      lg: false,
      xl: false,
      xl2: false,
    });
    renderComponent({ hideOnMobile: true });
    const logoSVG = screen.getByLabelText("Won Games");
    const path = screen.getByTestId("text");
    expect(path).toHaveClass("md:hidden");
    expect(logoSVG).toHaveClass("md:w-[5.8rem] h-[4.5rem]");
    expect(logoSVG.getAttribute("viewBox")).toEqual("0 0 60 45");
  });

  it("should render a normal logo with text if hideOnMobile is false and md is true", () => {
    useBreakpointsMock.mockReturnValue({
      md: true,
      sm: false,
      lg: false,
      xl: false,
      xl2: false,
    });
    renderComponent({ hideOnMobile: false });
    const logoSVG = screen.getByLabelText("Won Games");
    expect(logoSVG.getAttribute("viewBox")).toEqual("0 0 158 48");
  });
});
