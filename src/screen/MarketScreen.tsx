import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TopBar } from "../components/layout/TopBar";
import { GlobalStyles } from "../constants/style";
import { BottomNavigation } from "../components/layout/BottomNavigation";

export const MarketScreen = ({
  navigation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any>;
}) => (
  <View style={GlobalStyles.main}>
    <SafeAreaView
      style={{
        backgroundColor: `#222`,
      }}
    >
      <StatusBar style="inverted" />
      <TopBar title="Market" />
    </SafeAreaView>
    <View style={styles.box}>
      <Text>Market Screen</Text>
      <Button
        title="Back To Home"
        onPress={() => navigation.navigate(`HomeScreen`)}
      />
    </View>
    <SafeAreaView>
      <BottomNavigation />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  box: {
    flex: 1,
    display: `flex`,
    rowGap: 10,
  },
});
