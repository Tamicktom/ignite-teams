//* Libraries imports
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { NavigationContainer } from '@react-navigation/native';

//* Components imports
import { Routes } from "@routes/index";
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
          ? <Routes />
          : <Loading />
      }
    </ThemeProvider>
  );
}
