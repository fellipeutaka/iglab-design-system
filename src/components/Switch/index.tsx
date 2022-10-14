import * as SwitchPrimitive from "@radix-ui/react-switch";

import * as Styled from "./styles";

export interface SwitchProps extends SwitchPrimitive.SwitchProps {}

export function Switch(props: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      className={Styled.Root({})}
      aria-label="Switch"
      {...props}
    >
      <SwitchPrimitive.Thumb className={Styled.Thumb({})} />
    </SwitchPrimitive.Root>
  );
}
