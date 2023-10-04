import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/config/queryClient";
import { HomeScreen } from "./src/screen/HomeScreen";
import { MarketScreen } from "./src/screen/MarketScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PortFolioScreen } from "./src/screen/PortfolioScreen";
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
            animation: `none`,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="MarketScreen" component={MarketScreen} />
          <Stack.Screen name="PortFolioScreen" component={PortFolioScreen} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
