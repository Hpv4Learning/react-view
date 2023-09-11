import React from "react";
import { Pressable, PressableProps } from "react-native";

export const BaseButton: React.FC<PressableProps> = ({ children, ...rest }) => {
  return <Pressable {...rest}>{children}</Pressable>;
};
