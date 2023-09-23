import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/style";

type Props = {
  name?: string;
  image?: string;
};

export const PokeBox: React.FC<Props> = ({
  name = `prova`,
  image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png`,
}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image
        source={{ uri: image }}
        style={{
          width: 20,
          height: 20,
        }}
      />
      <Text style={GlobalStyles.whiteText}>{name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.darkBox,
    ...GlobalStyles.radiusSm,
    ...GlobalStyles.borderColor,
    padding: 8,
    height: 80,
    width: 80,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  header: {
    display: `flex`,
    columnGap: 4,
  },
});
