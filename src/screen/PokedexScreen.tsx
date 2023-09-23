import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TopBar } from "../components/layout/TopBar";

export const PokedexScreen = ({
  navigation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any>;
}) => (
  <SafeAreaView style={styles.container}>
    <StatusBar style="light" />
    <TopBar title="Pokedex" />

    <View style={styles.box}>
      <Text>Pokedex Screen</Text>
      <Button
        title="Back To Home"
        onPress={() => navigation.navigate(`HomeScreen`)}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#323232`,
    alignItems: `center`,
  },
  box: {
    flex: 1,
    display: `flex`,
    rowGap: 10,
  },
});
