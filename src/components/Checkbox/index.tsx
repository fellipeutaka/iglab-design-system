import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

import * as Styled from "./styles";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={Styled.Root({})}
      aria-label="Checkbox"
      {...props}
    >
      <CheckboxPrimitive.Indicator className={Styled.Indicator({})}>
        <Check weight="bold" size={20} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
