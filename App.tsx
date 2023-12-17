//* Libraries imports
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

//* Components imports
import Groups from "@screens/Groups";
import { Loading } from "@components/Loading";

//* Themes imports
import theme from "@theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      {
        fontsLoaded
          ? <Groups />
          : <Loading />
      }
    </ThemeProvider>
  );
}
