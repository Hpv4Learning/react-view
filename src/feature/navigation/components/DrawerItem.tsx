import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { HStack } from "../../../components/layout/Stack";

export const DrawerItem: React.FC<ViewProps> = ({
  children,
  style: inheritStyle,
  ...rest
}) => (
  <View {...rest} style={[style.container, inheritStyle]}>
    <HStack style={style.stack}>{children}</HStack>
  </View>
);

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  stack: {
    columnGap: 8,
    height: 48,
    justifyContent: `flex-start`,
    alignItems: `center`,
  },
});
