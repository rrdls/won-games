import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from ".";
import { BreakpointsProvider } from "@/hooks/use-breakpoints";

const meta: Meta<typeof Logo> = {
  title: "Logo",
  component: Logo,
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
type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
