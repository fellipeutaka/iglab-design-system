import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

import { styled } from "../../../stitches.config";

const Root = styled(CheckboxPrimitive.Root, {
  all: "unset",
  backgroundColor: "$gray-800",
  borderRadius: "4px",
  height: "24px",
  width: "24px",
  padding: "2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    opacity: "0.6",
  },
  "&:focus-visible": {
    $$color: "$colors$cyan-400",
    boxShadow: "$$color 0px 0px 0px 2px",
  },
});

const Indicator = styled(CheckboxPrimitive.Indicator, {
  color: "$cyan-500",
  height: "20px",
  width: "20px",
});

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <Root {...props}>
      <Indicator>
        <Check weight="bold" size={20} />
      </Indicator>
    </Root>
  );
}
