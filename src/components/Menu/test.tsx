import { render, screen, fireEvent } from "@testing-library/react";

import { Menu } from ".";
import { BreakpointsProvider } from "@/hooks/use-breakpoints";

const renderComponent = () => {
  render(
    <BreakpointsProvider>
      <Menu />
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
});
