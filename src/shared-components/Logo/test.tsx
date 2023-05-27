import { render, screen } from "@testing-library/react";
import { Logo } from ".";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

describe("<Logo/>", () => {
  it("should render a black label by default", () => {
    render(<Logo />);
    const logoSVG = screen.getByLabelText("Won Games");
    expect(logoSVG).toHaveClass("text-black");
  });

  it("should render a white label when variant 'white' is passed", () => {
    render(<Logo variant="white" />);
    const logoSVG = screen.getByLabelText("Won Games");
    expect(logoSVG).toHaveClass("text-white");
  });

  it("should have width 126px and height 38px when size is 'normal'", () => {
    render(<Logo size="normal" />);
    const logoSVG = screen.getByLabelText("Won Games");
    expect(logoSVG).toHaveClass("w-[126px] h-[38px]");
  });

  it("should have width 200px and height 60px when size is 'large'", () => {
    render(<Logo size="large" />);
    const logoSVG = screen.getByLabelText("Won Games");
    expect(logoSVG).toHaveClass("w-[200px] h-[60px]");
  });

  it("should render a normal logo without text if hideOnMobile is true", () => {
    render(<Logo hideOnMobile />);
    const logoSVG = screen.getByLabelText("Won Games");
    const path = screen.getByTestId("text");
    expect(path).toHaveClass("md:hidden");
    expect(logoSVG).toHaveClass("md:w-[58px] h-[45px]");
  });
});
