import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxProps } from ".";
import { Text } from "../Text";

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<CheckboxProps> = {};

export const Label: StoryObj<CheckboxProps> = {
  name: "With label",
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {Story({
          args: {
            id: "checkbox",
          },
        })}
        <Text size="sm" asChild>
          <label htmlFor="checkbox">Lembrar de mim</label>
        </Text>
      </div>
    ),
  ],
};
