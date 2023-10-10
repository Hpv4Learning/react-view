import React from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { GlobalStyles } from "../../../constants/style";
import { useActor } from "@xstate/react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDrawerState } from "../context/DrawerNavigationContext";
import { DrawerItem } from "./DrawerItem";
import Icon from "@expo/vector-icons/Ionicons";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerBody } from "./DrawerBody";
import { DrawerFooter } from "./DrawerFooter";
import { DrawerAnimatedView } from "./DrawerAnimatedView";

type NavigationProps = {
  ProfileScreen?: {
    name?: "Profile";
  };
  BillingScreen?: {
    name?: "Billing";
  };
};

type SingleNavigationProp = NativeStackNavigationProp<NavigationProps>;

export const Drawer = () => {
  const drawerService = useDrawerState();
  const [state, send] = useActor(drawerService);
  const isOpen = state.matches(`opened`);

  const preventEventPropagation = React.useCallback(
    (e: React.BaseSyntheticEvent) => {
      e.stopPropagation();
    },
    []
  );

  const { navigate } = useNavigation<SingleNavigationProp>();

  const navigateToProfile = React.useCallback(() => {
    send(`CLOSE`);
    navigate(`ProfileScreen`);
  }, [navigate, send]);

  const navigateToBilling = React.useCallback(() => {
    send(`CLOSE`);
    navigate(`BillingScreen`);
  }, [navigate, send]);

  return (
    <DrawerAnimatedView status={isOpen ? `opened` : `closed`}>
      <TouchableOpacity style={style.main} onPress={() => send(`CLOSE`)}>
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <Pressable
            onPress={preventEventPropagation}
            style={{
              flex: 1,
              backgroundColor: GlobalStyles.extraDarkBox.backgroundColor,
              width: `90%`,
              height: `100%`,
            }}
          >
            <DrawerHeader />
            <DrawerBody
              style={{
                marginTop: 16,
                flex: 1,
              }}
            >
              <Pressable onPress={navigateToProfile}>
                <DrawerItem>
                  <Icon name="person" size={20} color="white" />
                  <Text
                    style={{
                      color: `white`,
                      fontWeight: `600`,
                      fontSize: 16,
                    }}
                  >
                    Profile
                  </Text>
                </DrawerItem>
              </Pressable>
              <Pressable onPress={navigateToBilling}>
                <DrawerItem>
                  <Icon name="card" size={20} color="white" />
                  <Text
                    style={{
                      color: `white`,
                      fontWeight: `600`,
                      fontSize: 16,
                    }}
                  >
                    Billing
                  </Text>
                </DrawerItem>
              </Pressable>
              <Pressable onPress={() => send(`CLOSE`)}>
                <DrawerItem>
                  <Icon name="settings" size={20} color="white" />
                  <Text
                    style={{
                      color: `white`,
                      fontWeight: `600`,
                      fontSize: 16,
                    }}
                  >
                    Settings
                  </Text>
                </DrawerItem>
              </Pressable>
            </DrawerBody>
            <DrawerFooter />
          </Pressable>
        </SafeAreaView>
      </TouchableOpacity>
    </DrawerAnimatedView>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    flex: 1,
    height: `100%`,
    width: `100%`,
  },
});
