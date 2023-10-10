import React from "react";
import { View, ViewProps } from "react-native";

export const DrawerBody: React.FC<ViewProps> = ({
  children,
  style,
  ...rest
}) => (
  <View style={style} {...rest}>
    {children}
  </View>
);
