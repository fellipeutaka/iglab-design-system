import type { Meta, StoryObj } from "@storybook/react";

import { Switch, SwitchProps } from ".";
import { Text } from "../Text";

const meta: Meta<SwitchProps> = {
  title: "Components/Switch",
  component: Switch,
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

export const Default: StoryObj<SwitchProps> = {};

export const Label: StoryObj<SwitchProps> = {
  name: "With label",
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {Story({
          args: {
            id: "Switch",
          },
        })}
        <Text size="sm" css={{ cursor: "default" }} asChild>
          <label id="Switch-label" htmlFor="Switch">
            Notificações
          </label>
        </Text>
      </div>
    ),
  ],
};
