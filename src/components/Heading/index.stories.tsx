import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from ".";

const meta: Meta<typeof Heading> = {
  title: "Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "Heading",
  },
};

export const White: Story = {
  args: {
    children: "Heading",
    variant: "white",
  },
};
export const Left: Story = {
  args: {
    children: "Heading",
    linePosition: "left",
  },
};
export const Bottom: Story = {
  args: {
    children: "Heading",
    linePosition: "bottom",
  },
};
