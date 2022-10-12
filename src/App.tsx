import { globalCSS } from "@iglab-design-system/stitches";

import { SignIn } from "./screens/SignIn";

export function App() {
  globalCSS();
  return <SignIn />;
}
