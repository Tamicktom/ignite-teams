//* Libraries imports
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

//* Screens imports
import { Groups } from '@screens/Groups';
import { Players } from "@screens/Players";
import { NewGroups } from '@screens/NewGroups';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Groups" component={Groups} />
      <Stack.Screen name="Players" component={Players} />
      <Stack.Screen name="NewGroups" component={NewGroups} />
    </Stack.Navigator>
  );
}