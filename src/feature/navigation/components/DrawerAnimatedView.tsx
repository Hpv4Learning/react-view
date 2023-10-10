import React from "react";
import { Animated, StyleSheet } from "react-native";

type DrawerAnimatedViewProps = {
  children: React.ReactNode;
  status: "opened" | "closed";
};

export const DrawerAnimatedView: React.FC<DrawerAnimatedViewProps> = ({
  children,
  status,
}) => {
  const anim = React.useRef(new Animated.Value(0)).current;

  const openAnim = React.useCallback(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 175,
      useNativeDriver: false,
    }).start();
  }, [anim]);

  const closeAnim = React.useCallback(() => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 175,
      useNativeDriver: false,
    }).start();
  }, [anim]);

  React.useEffect(() => {
    if (status === `opened`) {
      openAnim();
    } else {
      closeAnim();
    }
  }, [closeAnim, openAnim, status]);
  return (
    <Animated.View
      style={[
        styles.default,
        {
          width: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [`0%`, `100%`],
          }),
          opacity: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  default: {
    zIndex: 10,
    position: `absolute`,
    top: 0,
    left: 0,
    bottom: 0,
    flex: 1,
    height: `100%`,
  },
});
