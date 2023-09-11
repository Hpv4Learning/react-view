import { HomeScreen } from "./src/screen/HomeScreen";
import { PokedexScreen } from "./src/screen/PokedexScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerBackTitleVisible: false,
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PokedexScreen" component={PokedexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
