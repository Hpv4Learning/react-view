import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { PokeBox } from "../components/PokeBox";
import { GlobalStyles } from "../constants/style";
import { TopBar } from "../components/layout/TopBar";
import { Medals } from "../components/Medals";
import { PremiumBanner } from "../components/PremiumBanner";
import { TokenList } from "../feature/saved/components/TokenList";

const data = new Array(20).fill(0).map((_) => ({ name: ``, image: `` }));

export const HomeScreen = ({
  navigation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any>;
}) => (
  <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
    <TopBar title="Home" />
    <ScrollView style={styles.box}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: `bold`,
          color: `white`,
        }}
      >
        Most Recent
      </Text>
      <FlatList
        data={data}
        style={{
          marginTop: 8,
        }}
        renderItem={() => <PokeBox />}
        keyExtractor={(_, i) => i.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              padding: 4,
            }}
          />
        )}
        horizontal
      />
      <View
        style={{
          marginTop: 24,
        }}
      >
        <PremiumBanner />
      </View>
      <View
        style={{
          marginTop: 24,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: `bold`,
            color: `white`,
          }}
        >
          Your Token
        </Text>
        <TokenList
          style={{
            marginTop: 12,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 36,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: `bold`,
            color: `white`,
          }}
        >
          Le tue medaglie
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: `#c8c8c8`,
            marginTop: 8,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <View
          style={{
            marginTop: 12,
          }}
        >
          <Medals />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.container,
  },
  box: {
    padding: 14,
  },
});
