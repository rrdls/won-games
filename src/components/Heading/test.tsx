import { getByRole, render, screen } from "@testing-library/react";

import { Heading } from ".";

describe("<Heading/>", () => {
  it("should render a heading with left border green if linePosition is left", () => {
    render(<Heading linePosition="left">Seção 1</Heading>);
    const heading = screen.getByRole("heading", { name: /Seção 1/i });
    expect(heading).toHaveClass(
      "before:content-[''] before:w-[7px] before:h-[31px] before:bg-secondary before:absolute before:left-[-12px]"
    );
  });

  it("should render a heading with bottom border pink if linePosition is bottom", () => {
    render(<Heading linePosition="bottom">Seção 1</Heading>);
    const heading = screen.getByRole("heading", { name: /Seção 1/i });
    expect(heading).toHaveClass(
      "before:content-[''] before:w-[49px] before:h-[5px] before:bg-primary before:absolute before:left-0 before:bottom-[-10px]"
    );
  });

  it("should render a heading with left border green by default", () => {
    render(<Heading linePosition="left">Seção 1</Heading>);
    const heading = screen.getByRole("heading", { name: /Seção 1/i });
    expect(heading).toHaveClass(
      "before:content-[''] before:w-[7px] before:h-[31px] before:bg-secondary before:absolute before:left-[-12px]"
    );
  });

  it("should render a heading with text color black if variant is black", () => {
    render(<Heading variant="black">Seção 1</Heading>);
    const heading = screen.getByRole("heading", { name: /Seção 1/i });
    expect(heading).toHaveClass("text-black");
  });

  it("should render a heading with text color white if variant is white", () => {
    render(<Heading variant="white">Seção 1</Heading>);
    const heading = screen.getByRole("heading", { name: /Seção 1/i });
    expect(heading).toHaveClass("text-white");
  });
});
