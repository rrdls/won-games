import type { Meta, StoryObj } from "@storybook/react";
import Main from ".";

const meta: Meta<typeof Main> = {
  title: "Example/Main",
  component: Main,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Main>;

export const Default: Story = {};
