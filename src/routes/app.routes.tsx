//* Libraries imports
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

//* Screens imports
import { Groups } from '@screens/Groups';
import { Players } from "@screens/Players";
import { NewGroups } from '@screens/NewGroups';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, freezeOnBlur: true }}>
      <Stack.Screen name="groups" component={Groups} />
      <Stack.Screen name="players" component={Players} />
      <Stack.Screen name="new" component={NewGroups} />
    </Stack.Navigator>
  );
}