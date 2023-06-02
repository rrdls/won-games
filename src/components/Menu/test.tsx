import { render, screen } from "@testing-library/react";
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

import { Menu } from ".";

describe("<Menu/>", () => {
  it("should", () => {
    const { container } = render(<Menu />);

    expect(
      container.firstChild
    ).toBeInTheDocument();
  
  });
});