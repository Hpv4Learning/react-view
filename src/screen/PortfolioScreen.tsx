import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TopBar } from "../components/layout/TopBar";
import { GlobalStyles } from "../constants/style";
import { BottomNavigation } from "../components/layout/BottomNavigation";

export const PortFolioScreen = ({
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
    <ScrollView style={styles.box}>
      <Text>Portfolio Screen</Text>
      <Button
        title="Back To Markets"
        onPress={() => navigation.navigate(`MarketScreen`)}
      />
    </ScrollView>
    <SafeAreaView>
      <BottomNavigation />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
});
