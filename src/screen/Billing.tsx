import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { TopBar } from "../components/layout/TopBar";
import { GlobalStyles } from "../constants/style";
export const Billing = () => (
  <View style={GlobalStyles.main}>
    <SafeAreaView>
      <StatusBar style="inverted" />
      <TopBar title="Billing" />
    </SafeAreaView>
    <View>
      <Text>Billing</Text>
    </View>
  </View>
);
