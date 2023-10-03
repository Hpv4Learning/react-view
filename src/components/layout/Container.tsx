import React from "react";
import { View, ViewProps } from "react-native";
import { GlobalStyles } from "../../constants/style";

export const Container: React.FC<ViewProps> = ({
  children,
  style,
  ...rest
}) => (
  <View {...rest} style={[GlobalStyles.container, style]}>
    {children}
  </View>
);
