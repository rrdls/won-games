import { render, screen, fireEvent } from "@testing-library/react";

import { Menu } from ".";
import { BreakpointsProvider } from "@/hooks/use-breakpoints";

const renderComponent = (props = {}) => {
  render(
    <BreakpointsProvider>
      <Menu {...props} />
    </BreakpointsProvider>
  );
};

describe("<Menu/>", () => {
  it("should render a menu", () => {
    renderComponent();
    expect(screen.getByTestId("menu")).toBeInTheDocument();
  });
  it("should render a menu icons", () => {
    renderComponent();
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });
  it("should render a menu Logo", () => {
    renderComponent();
    expect(screen.getByTestId(/logo/i)).toBeInTheDocument();
  });

  it("should handle open/close menu mobile", () => {
    renderComponent();
    const fullMenuElement = screen.getByRole("navigation", { hidden: true });
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
    expect(fullMenuElement).toHaveClass("opacity-0 pointer-events-none");
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("false");
    expect(fullMenuElement).toHaveClass("opacity-1 pointer-events-auto");
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
    expect(fullMenuElement).toHaveClass("opacity-0 pointer-events-none");
  });

  it("should show register box when logged out", () => {
    renderComponent();
    expect(screen.getByTestId("registerBox")).toBeInTheDocument();
    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();
    expect(screen.getByText(/log in now/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  it("should show wishlist and my account when logged in", () => {
    renderComponent({ userName: "Renato" });
    expect(screen.getByText(/my account/i)).toBeInTheDocument();
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });

  it("should show username when logged in", () => {
    const userName = "Renato";
    renderComponent({ userName });
    expect(screen.getByTestId("userArea")).toHaveClass("md:hidden");
    expect(screen.getByText(RegExp(`${userName}`, "i"))).toBeInTheDocument();
    expect(screen.getByLabelText(/user avatar/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open dropdown menu/i)).toBeInTheDocument();
  });

  it("should show sign in button when logged out", () => {
    renderComponent();
    const button = screen.getByRole("button", { name: /sign in/i });
    expect(button).toHaveClass("md:hidden");
    expect(button).toBeInTheDocument();
  });
});
