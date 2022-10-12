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
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {};

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
