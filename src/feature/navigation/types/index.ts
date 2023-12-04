import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const allowedRoutes = {
  HomeScreen: {
    name: `HomeScreen` as const,
  },
  MarketScreen: {
    name: `MarketScreen` as const,
  },
  PortFolioScreen: {
    name: `PortFolioScreen` as const,
  },
  ProfileScreen: {
    name: `ProfileScreen` as const,
  },
  BillingScreen: {
    name: `BillingScreen` as const,
  },
  LoginScreen: {
    name: `LoginScreen` as const,
  },
  SignupScreen: {
    name: `SignupScreen` as const,
  },
  SettingsScreen: {
    name: `SettingsScreen` as const,
  },
  ForgotPasswordScreen: {
    name: `ForgotPasswordScreen` as const,
  },
  ResetPasswordScreen: {
    name: `ResetPasswordScreen` as const,
  },
  VerificationScreen: {
    name: `VerificationScreen` as const,
  },
  WelcomeScreen: {
    name: `WelcomeScreen` as const,
  },
};

export type NavigationProps = typeof allowedRoutes;
export type NavigationRouteType = keyof NavigationProps;

export type NavigationType = NativeStackNavigationProp<
  Partial<NavigationProps>
>;
