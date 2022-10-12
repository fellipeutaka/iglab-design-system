import type { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

import * as TextField from ".";

const meta: Meta<TextField.IRootProps> = {
  title: "Components/TextField",
  component: TextField.Root,
  args: {
    children: <TextField.Input placeholder="Type your e-mail address" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<TextField.IRootProps> = {};

export const Icon: StoryObj<TextField.IRootProps> = {
  name: "With icon",
  args: {
    children: [
      <TextField.Icon>
        <Envelope />
      </TextField.Icon>,
      <TextField.Input placeholder="Type your e-mail address" />,
    ],
  },
};
