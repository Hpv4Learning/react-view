import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/style";
import Icon from "@expo/vector-icons/Ionicons";
import { HStack } from "./layout/Stack";

type Props = {
  name?: string;
  image?: string;
};

export const PokeRow: React.FC<Props> = ({
  name = "Test",
  image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png",
}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  return (
    <Pressable onPress={() => console.log("evvai")}>
      <View style={style.box}>
        <HStack
          style={[
            style.stack,
            {
              justifyContent: "space-between",
              columnGap: 8,
            },
          ]}
        >
          <HStack style={[style.stack, { columnGap: 14 }]}>
            <View
              onStartShouldSetResponder={() => true}
              onTouchEnd={(e) => e.stopPropagation()}
            >
              <Pressable onPress={() => setIsFavorite(!isFavorite)}>
                <Icon
                  name={isFavorite ? "star" : "star-outline"}
                  size={14}
                  color={isFavorite ? "yellow" : "white"}
                />
              </Pressable>
            </View>
            <HStack
              style={[
                style.stack,
                {
                  columnGap: 8,
                },
              ]}
            >
              <View style={style.imageBox}>
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  ...GlobalStyles.grey500Text,
                }}
              >
                {name}
              </Text>
            </HStack>
          </HStack>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              alignSelf: "flex-end",

              ...GlobalStyles.grey500Text,
            }}
          >
            Last Seen: 1 day ago
          </Text>
        </HStack>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  box: {
    ...GlobalStyles.extraDarkBox,
    ...GlobalStyles.radiusMd,
    padding: 12,
    height: 60,
    flex: 1,
  },
  stack: {
    flex: 1,
  },
  imageBox: {
    width: 30,
    height: 30,
    borderRadius: 100,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
