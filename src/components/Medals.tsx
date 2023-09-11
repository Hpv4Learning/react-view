import { ScrollView, StyleSheet, View } from "react-native";
import { Medal } from "./Medal";
import { medals } from "../constants/medals";

export const Medals = () => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
    >
      {medals.map((medal) => {
        return <Medal key={medal.name} {...medal} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
  },
  contentContainer: {
    columnGap: 8,
  },
});
