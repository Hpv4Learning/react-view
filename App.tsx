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
import { View } from "react-native";
import { useSplashScreen } from "./src/hooks/useSplashScreen";
import { LoginScreen } from "./src/screen/LoginScreen";
import { SingupScreen } from "./src/screen/SingUpScreen";
import { ForgotPasswordScreen } from "./src/screen/ForgotPassword";
import { WelcomePage } from "./src/screen/WelcomePage";

// Keep the splash screen visible while we fetch resources
const Stack = createNativeStackNavigator();

export default function App() {
  const { appIsReady, onLayoutRootView } = useSplashScreen();

  if (!appIsReady) {
    return null;
  }
  return (
    <>
      <View onLayout={onLayoutRootView} />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <DrawerStateProvider>
            <Stack.Navigator
              initialRouteName="WelcomeScreen"
              screenOptions={{
                headerBackTitleVisible: false,
                headerShown: false,
                animation: `none`,
              }}
            >
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="MarketScreen" component={MarketScreen} />
              <Stack.Screen
                name="PortFolioScreen"
                component={PortFolioScreen}
              />
              <Stack.Screen name="ProfileScreen" component={Profile} />
              <Stack.Screen name="BillingScreen" component={Billing} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="SignupScreen" component={SingupScreen} />
              <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
              />
              <Stack.Screen name="WelcomeScreen" component={WelcomePage} />
            </Stack.Navigator>
            <Drawer />
          </DrawerStateProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}
