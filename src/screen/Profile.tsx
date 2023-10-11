import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TopBar } from "../components/layout/TopBar";
import { GlobalStyles } from "../constants/style";
import { BottomNavigation } from "../components/layout/BottomNavigation";
export const Profile = () => (
  <View style={GlobalStyles.main}>
    <SafeAreaView
      style={{
        backgroundColor: `#222`,
      }}
    >
      <StatusBar style="inverted" />
      <TopBar title="Profile" />
    </SafeAreaView>
    <View
      style={{
        flex: 1,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <Text>Profile</Text>
    </View>
    <SafeAreaView>
      <BottomNavigation />
    </SafeAreaView>
  </View>
);
