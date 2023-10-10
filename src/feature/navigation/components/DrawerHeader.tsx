import React from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { HStack } from "../../../components/layout/Stack";
import { Avatar } from "../../../components/layout/Avatar";
import Icon from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../../constants/style";

export const DrawerHeader: React.FC<ViewProps> = () => (
  <View style={style.container}>
    <HStack style={style.content}>
      <Avatar
        style={{
          width: 40,
          height: 40,
          backgroundColor: `#ccc`,
        }}
      >
        <Icon size={20} name="image" color={GlobalStyles.redText200.color} />
      </Avatar>
      <Text
        style={{
          color: `white`,
          fontWeight: `bold`,
          fontSize: 20,
        }}
      >
        User Name
      </Text>
    </HStack>
  </View>
);

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderBottomColor: `#444`,
    borderBottomWidth: 1,
  },
  content: {
    height: 64,
    justifyContent: `flex-start`,
    alignItems: `center`,
    columnGap: 8,
    width: `100%`,
  },
});
