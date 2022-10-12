import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from ".";

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Text",
    size: "md",
    asChild: false,
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Testing with p...</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
