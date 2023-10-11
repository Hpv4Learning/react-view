import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/config/queryClient";
import { HomeScreen } from "./src/screen/HomeScreen";
import { MarketScreen } from "./src/screen/MarketScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PortFolioScreen } from "./src/screen/PortfolioScreen";
import { Profile } from "./src/screen/Profile";
import { Billing } from "./src/screen/Billing";
import { Drawer } from "./src/feature/navigation/components/DrawerNavigation";
import { DrawerStateProvider } from "./src/feature/navigation/context/DrawerNavigationContext";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <DrawerStateProvider>
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
            <Stack.Screen name="ProfileScreen" component={Profile} />
            <Stack.Screen name="BillingScreen" component={Billing} />
          </Stack.Navigator>
          <Drawer />
        </DrawerStateProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
