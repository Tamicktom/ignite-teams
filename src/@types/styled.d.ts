//* Libraries imports
import "styled-components";

//* Theme import
import theme from "@theme/.";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
