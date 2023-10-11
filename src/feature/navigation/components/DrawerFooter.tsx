import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BaseButton } from "../../../components/layout/Button";

export const DrawerFooter = () => (
  <View style={style.container}>
    <BaseButton style={style.buttonStyle} onPress={() => {}}>
      <Text
        style={{
          color: `#fff`,
        }}
      >
        Logout
      </Text>
    </BaseButton>
  </View>
);

export const style = StyleSheet.create({
  container: {
    width: `90%`,
    alignSelf: `center`,
  },
  buttonStyle: {
    columnGap: 8,
    height: 40,
    borderRadius: 100,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `#6e26a4`,
  },
});
