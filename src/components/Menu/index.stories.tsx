import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from ".";
import { BreakpointsProvider } from "@/hooks/use-breakpoints";

const meta: Meta<typeof Menu> = {
  title: "Menu",
  component: Menu,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BreakpointsProvider>
        <Story />
      </BreakpointsProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {};
