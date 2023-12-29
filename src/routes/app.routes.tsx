//* Libraries imports
import { View } from 'react-native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

//* Screens imports
import { Groups } from '@screens/Groups';
import { Players } from "@screens/Players";
import { NewGroups } from '@screens/NewGroups';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="groups" component={Groups} />
        <Stack.Screen name="players" component={Players} />
        <Stack.Screen name="new" component={NewGroups} />
      </Stack.Navigator>
    </View>
  );
}