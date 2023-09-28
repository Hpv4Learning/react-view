import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/config/queryClient";
import { HomeScreen } from "./src/screen/HomeScreen";
import { PokedexScreen } from "./src/screen/PokedexScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerBackTitleVisible: false,
          headerShown: false,
          animation: `slide_from_right`,
        }}
      >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PokedexScreen" component={PokedexScreen} />
      </Stack.Navigator>
        </QueryClientProvider>
    </NavigationContainer>
  );
}
