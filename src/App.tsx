import { SignIn } from "@iglab-design-system/screens/SignIn";
import { globalCSS } from "@iglab-design-system/stitches";

export function App() {
  globalCSS();
  return <SignIn />;
}
