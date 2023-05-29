import { render, screen } from "@testing-library/react";
import { ShoppingCart } from "lucide-react";
import { Button } from ".";

describe("<Button/>", () => {
  it("should render a small button when size prop is 'small'", () => {
    render(<Button size="small" />);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass(
      "py-[8px] px-[30px] text-xs [&>svg]:w-[15px] [&>svg]:h-[15px]"
    );
  });

  it("should render a medium button when size prop is 'medium'", () => {
    render(<Button size="medium" />);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass(
      "py-[10px] px-[32px] text-sm [&>svg]:w-[16px] [&>svg]:h-[16px]"
    );
  });

  it("should render a large button when size prop is 'large'", () => {
    render(<Button size="large" />);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass(
      "py-[13px] px-[52px] text-base [&>svg]:w-[20px] [&>svg]:h-[20px]"
    );
  });

  it("should render a button with icon when iconLeft exists", () => {
    render(<Button iconLeft={<ShoppingCart data-testid="icon" />} />);
    const icon = screen.getByTestId("icon");
    const button = screen.getByTestId("button");
    expect(icon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should render a button with icon when iconRight exists", () => {
    render(<Button iconRight={<ShoppingCart data-testid="icon" />} />);
    const icon = screen.getByTestId("icon");
    const button = screen.getByTestId("button");
    expect(icon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should render a button with full width", () => {
    render(<Button fullWidth />);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("w-full");
  });
});
