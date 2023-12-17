//* Libraries imports
import { ThemeProvider } from "styled-components";

//* Components imports
import Groups from "@screens/Groups";

//* Themes imports
import theme from "@theme/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}

