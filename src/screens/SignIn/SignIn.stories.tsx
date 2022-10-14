import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { rest } from "msw";

import { SignIn } from ".";

const meta: Meta = {
  title: "Screens/SignIn",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/api/sessions", (req, res, ctx) => {
          return res();
        }),
      ],
    },
  },
};

export default meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(
      canvas.getByPlaceholderText("johndoe@example.com"),
      "fellipeutaka@gmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("*************"), "12345678");
    userEvent.click(canvas.getByRole("button"));
    await waitFor(
      () => {
        expect(canvas.getByText("Logado!")).toBeVisible();
      },
      {
        timeout: 3000, // 3 seconds,
      }
    );
  },
};
