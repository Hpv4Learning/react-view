import React from "react";
import { Pressable, PressableProps } from "react-native";

export const BaseButton: React.FC<PressableProps> = ({ children, ...rest }) => <Pressable {...rest}>{children}</Pressable>;
