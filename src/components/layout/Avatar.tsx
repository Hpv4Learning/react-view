import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

export const Avatar: React.FC<ViewProps> = ({
  children,
  style: inheritStyle,
  ...rest
}) => <View style={[style.box, inheritStyle]}>{children}</View>;

const style = StyleSheet.create({
  box: {
    borderRadius: 100,
    overflow: `hidden`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  },
});
