import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GlobalStyles } from "../constants/style";
import { HStack, VStack } from "./layout/Stack";

type MedalProps = {
  name: string;
  img: ImageSourcePropType;
  location: string;
  color: string;
};

export const Medal = ({ name, img, location, color }: MedalProps) => {
  return (
    <View style={styles.box}>
      <VStack style={styles.boxContent}>
        <HStack style={styles.boxInfo}>
          <Text
            style={{
              fontSize: 16,
              ...GlobalStyles.lightText,
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
          <Image source={img} style={{ width: 18, height: 18 }} />
        </HStack>
        <HStack
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4,
            ...GlobalStyles.radiusMd,
            backgroundColor: color,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "500",
            }}
          >
            {location}
          </Text>
        </HStack>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    ...GlobalStyles.darkBox,
    ...GlobalStyles.radiusMd,
    ...GlobalStyles.borderColor,
    width: 240,
    height: "100%",
    padding: 12,
    flex: 1,
  },
  boxContent: {
    justifyContent: "space-between",
    height: "100%",
  },
  boxInfo: {
    justifyContent: "space-between",
    width: "100%",
  },
  label: {
    padding: 4,
  },
});
