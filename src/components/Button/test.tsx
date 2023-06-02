import { render, screen } from "@testing-library/react";
import { ShoppingCart } from "lucide-react";
import { Button } from ".";

describe("<Button/>", () => {
  it("should render a small button when size prop is 'small'", () => {
    render(<Button size="small">Button</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass(
      "py-[0.7rem] px-[3.0rem] text-xs [&>svg]:w-[1.5rem] [&>svg]:h-[1.5rem]"
    );
    const children = screen.getByTestId("children");
    expect(children).toHaveClass("ml-[0.8rem] mr-[0.8rem]");
  });

  it("should render a medium button when size prop is 'medium'", () => {
    render(<Button size="medium">Button</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass(
      "py-[1.0rem] px-[3.0rem] text-sm [&>svg]:w-[1.6rem] [&>svg]:h-[1.6rem]"
    );
  });

  it("should render a large button when size prop is 'large'", () => {
    render(<Button size="large">Button</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass(
      "py-[1.3rem] px-[5.2rem] text-base [&>svg]:w-[2.0rem] [&>svg]:h-[2.0rem]"
    );
  });

  it("should render a button with icon when iconLeft exists", () => {
    render(
      <Button iconLeft={<ShoppingCart data-testid="icon" />}>Button</Button>
    );
    const icon = screen.getByTestId("icon");
    const button = screen.getByTestId("button");
    expect(icon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should render a button with icon when iconRight exists", () => {
    render(
      <Button iconRight={<ShoppingCart data-testid="icon" />}>Button</Button>
    );
    const icon = screen.getByTestId("icon");
    const button = screen.getByTestId("button");
    expect(icon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should render a button with full width", () => {
    render(<Button fullWidth>Button</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("w-full");
  });

  it("should render a pink button if variant is 'pink'", () => {
    render(<Button variant="pink">Button</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("bg-button hover:bg-buttonHover");
  });

  it("should render a green button if variant is 'green'", () => {
    render(<Button variant="green">Button</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("bg-secondary hover:opacity-90");
  });

  it("should render a button only with icon if children not exists", () => {
    render(<Button iconRight={<ShoppingCart data-testid="icon" />} />);
    const children = screen.getByTestId("children");
    const button = screen.getByTestId("button");
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(children.textContent).toEqual("");
    expect(children).not.toHaveClass("ml-[8px] mr-[8px]");
    expect(button).toHaveClass("px-[0.8rem] py-[0.6rem]");
  });
});
