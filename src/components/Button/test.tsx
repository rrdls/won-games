import { render, screen } from "@testing-library/react";
import { ShoppingCart } from "lucide-react";
import { Button } from ".";

describe("<Button/>", () => {
  it("should render a small button when size prop is 'small'", () => {
    render(<Button size="small">Button</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass(
      "py-[8px] px-[30px] text-xs [&>svg]:w-[15px] [&>svg]:h-[15px]"
    );
    const children = screen.getByTestId("children");
    expect(children).toHaveClass("ml-[8px] mr-[8px]");
  });

  it("should render a medium button when size prop is 'medium'", () => {
    render(<Button size="medium">Button</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass(
      "py-[10px] px-[32px] text-sm [&>svg]:w-[16px] [&>svg]:h-[16px]"
    );
  });

  it("should render a large button when size prop is 'large'", () => {
    render(<Button size="large">Button</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass(
      "py-[13px] px-[52px] text-base [&>svg]:w-[20px] [&>svg]:h-[20px]"
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
    expect(button).toHaveClass("px-[8px] py-[6px]");
  });
});
