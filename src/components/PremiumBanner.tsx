import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { HStack, VStack } from "./layout/Stack";
import Icon from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../constants/style";

export const PremiumBanner = () => {
  return (
    <View style={styles.container}>
      <HStack
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../images/premium.png")}
          style={{
            width: 72,
            height: 72,
          }}
        />
        <VStack
          style={{
            rowGap: 8,
            maxWidth: "70%",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Passa a Premium
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "black",
            }}
          >
            Accedi a funzionalità esclusive e ottieni un mese gratis
          </Text>
        </VStack>
        <Pressable
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Icon
            name="close"
            size={20}
            color="
            black
            "
          />
        </Pressable>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9D9BC",
    borderWidth: 1,
    borderColor: "#F6C193",
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 140,
    width: "100%",
    ...GlobalStyles.radiusMd,
  },
});
