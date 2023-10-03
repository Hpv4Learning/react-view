import { Pressable, StyleSheet, Text } from "react-native";
import { HStack } from "./Stack";
import Icon from "@expo/vector-icons/Ionicons";
import { Container } from "./Container";

type LayoutProps = {
  title: string;
};

export const TopBar: React.FC<LayoutProps> = ({ title }) => (
  <Container style={styles.container}>
    <HStack style={styles.stack}>
      <Text
        style={{
          color: `white`,
          fontWeight: `bold`,
          fontSize: 18,
        }}
      >
        {title}
      </Text>
      <Pressable>
        <Icon name="settings" size={24} color="#fff" />
      </Pressable>
    </HStack>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    height: 64,
    flex: 0,
    width: `100%`,
  },
  stack: {
    flex: 1,
    width: `100%`,
    justifyContent: `space-between`,
    height: 64,
    position: `absolute`,
  },
});
