import type { Meta, StoryObj } from "@storybook/react";

import { Heading, HeadingProps } from ".";

const meta: Meta<HeadingProps> = {
  title: "Components/Heading",
  component: Heading,
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

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Testing with h1...</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
