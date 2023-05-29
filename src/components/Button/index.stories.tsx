import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { ShoppingCart } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Button",
    iconLeft: <ShoppingCart className="" />,
  },
};
