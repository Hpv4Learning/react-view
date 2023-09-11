import { Pressable, StyleSheet, Text, View } from "react-native";
import { HStack } from "./Stack";
import Icon from "@expo/vector-icons/Ionicons";

type LayoutProps = {
  title: string;
};

export const TopBar: React.FC<LayoutProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <HStack style={styles.stack}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {title}
        </Text>
        <Pressable>
          <Icon name="settings" size={24} color="white" />
        </Pressable>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: "#434343",
  },
  stack: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    height: 64,
    paddingLeft: 16,
    paddingRight: 16,
    position: "absolute",
  },
});
