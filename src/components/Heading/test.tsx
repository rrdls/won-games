import { getByRole, render, screen } from "@testing-library/react";

import { Heading } from ".";

describe("<Heading/>", () => {
  it("should render a heading with left border green if linePosition is left", () => {
    render(<Heading linePosition="left">Seção 1</Heading>);
    const heading = screen.getByRole("heading", { name: /Seção 1/i });
    expect(heading).toHaveClass(
      "before:content-[''] before:w-[0.7rem] before:h-[3.1rem] before:bg-secondary before:absolute before:left-[-1.2rem]"
    );
  });

  it("should render a heading with bottom border pink if linePosition is bottom", () => {
    render(<Heading linePosition="bottom">Seção 1</Heading>);
    const heading = screen.getByRole("heading", { name: /Seção 1/i });
    expect(heading).toHaveClass(
      "before:content-[''] before:w-[4.9rem] before:h-[0.5rem] before:bg-primary before:absolute before:left-0 before:bottom-[-1.0rem]"
    );
  });

  it("should render a heading with left border green by default", () => {
    render(<Heading linePosition="left">Seção 1</Heading>);
    const heading = screen.getByRole("heading", { name: /Seção 1/i });
    expect(heading).toHaveClass(
      "before:content-[''] before:w-[0.7rem] before:h-[3.1rem] before:bg-secondary before:absolute before:left-[-1.2rem]"
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
