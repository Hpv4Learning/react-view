import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { HStack, VStack } from "./layout/Stack";
import Icon from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../constants/style";
import { useMachine } from "@xstate/react";
import { bannerMachine } from "../machines/bannerMachine";

export const PremiumBanner = () => {
  const [state, send] = useMachine(bannerMachine);
  const open = state.matches(`open`);
  if (!open) return null;
  return (
    <View style={styles.container}>
      <HStack
        style={{
          width: `100%`,
          height: `100%`,
          justifyContent: `space-between`,
        }}
      >
        <Image
          source={require(`../images/premium.png`)}
          style={{
            width: 72,
            height: 72,
          }}
        />
        <VStack
          style={{
            rowGap: 8,
            maxWidth: `70%`,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: `bold`,
              color: `black`,
            }}
          >
            Passa a Premium
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: `black`,
            }}
          >
            Accedi a funzionalità esclusive e ottieni un mese gratis
          </Text>
        </VStack>
        <Pressable
          onPress={() => send(`CLOSE`)}
          style={{
            alignSelf: `flex-start`,
          }}
        >
          <Icon name="close" size={20} color="#000" />
        </Pressable>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: `#F9D9BC`,
    borderWidth: 1,
    borderColor: `#F6C193`,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 140,
    width: `100%`,
    ...GlobalStyles.radiusMd,
  },
});
