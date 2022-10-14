import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from ".";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    asChild: false,
  },
  argTypes: {
    variant: {
      options: [0],
      mapping: ["primary"],
      control: {
        type: "select",
        labels: ["primary"],
      },
    },
    isLoading: {
      control: "boolean",
    },
    outlined: {
      control: "boolean",
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {};

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    outlined: true,
    variant: "primary",
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const Loading: StoryObj<ButtonProps> = {
  args: {
    isLoading: true,
  },
};

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: <a href="https://google.com.br">Testing with link</a>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
