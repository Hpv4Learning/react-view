import { Pressable, StyleSheet, View } from "react-native";
import { HStack } from "./Stack";
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useMemo } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = {
  HomeScreen?: {
    name?: "HomeScreen";
  };
  MarketScreen?: {
    name?: "MarketScreen";
  };
  PortFolioScreen?: {
    name?: "PortFolioScreen";
  };
};

type SingleNavigationProp = NativeStackNavigationProp<NavigationProps>;

export const BottomNavigation = () => {
  const { name } = useRoute();
  const { navigate } = useNavigation<SingleNavigationProp>();
  const iconsOnActiveTabs = useMemo(
    () => ({
      home:
        name === `HomeScreen` ? (`home` as const) : (`home-outline` as const),
      stats:
        name === `MarketScreen`
          ? (`stats-chart` as const)
          : (`stats-chart-outline` as const),
      cash:
        name === `PortFolioScreen`
          ? (`cash` as const)
          : (`cash-outline` as const),
    }),
    [name]
  );
  return (
    <View style={styles.container}>
      <HStack style={styles.stack}>
        <Pressable
          onPress={() => navigate(`HomeScreen`)}
          style={{
            flex: 1,
          }}
        >
          <HStack
            style={[
              styles.navItem,
              name === `HomeScreen` ? styles.activeItem : undefined,
            ]}
          >
            <Icon name={iconsOnActiveTabs.home} size={24} color="#fff" />
          </HStack>
        </Pressable>
        <Pressable
          onPress={() => navigate(`MarketScreen`)}
          style={{
            flex: 1,
          }}
        >
          <HStack
            style={[
              styles.navItem,
              name === `MarketScreen` ? styles.activeItem : undefined,
            ]}
          >
            <Icon name={iconsOnActiveTabs.stats} size={24} color="#fff" />
          </HStack>
        </Pressable>
        <Pressable
          onPress={() => navigate(`PortFolioScreen`)}
          style={{
            flex: 1,
          }}
        >
          <HStack
            style={[
              styles.navItem,
              name === `PortFolioScreen` ? styles.activeItem : undefined,
            ]}
          >
            <Icon name={iconsOnActiveTabs.cash} size={24} color="#fff" />
          </HStack>
        </Pressable>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    height: 56,
    width: `100%`,
    blurRadius: 1,
    backgroundColor: `transparent`,
  },
  stack: {
    flex: 1,
    width: `100%`,
    justifyContent: `space-between`,
    alignItems: `center`,
    height: 56,
    position: `absolute`,
  },
  navItem: {
    flex: 1,
    alignContent: `center`,
    justifyContent: `center`,
    height: `100%`,
  },
  activeItem: {
    backgroundColor: `#111`,
  },
});
