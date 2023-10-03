import { Pressable, StyleSheet, View } from "react-native";
import { HStack } from "./Stack";
import Icon from "@expo/vector-icons/Ionicons";

export const BottomNavigation = () => (
  <View style={styles.container}>
    <HStack style={styles.stack}>
      <HStack style={[styles.navItem]}>
        <Pressable>
          <Icon name="home" size={24} color="#fff" />
        </Pressable>
      </HStack>
      <HStack style={styles.navItem}>
        <Pressable>
          <Icon name="stats-chart" size={24} color="#fff" />
        </Pressable>
      </HStack>
      <HStack style={[styles.navItem]}>
        <Pressable>
          <Icon name="cash" size={24} color="#fff" />
        </Pressable>
      </HStack>
    </HStack>
  </View>
);

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
});
