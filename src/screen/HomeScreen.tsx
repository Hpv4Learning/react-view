import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GlobalStyles } from "../constants/style";
import { TopBar } from "../components/layout/TopBar";
import { PremiumBanner } from "../components/PremiumBanner";
import { TokenList } from "../feature/saved/components/TokenList";
import { TopMoversSection } from "../feature/top-movers/components/TopMoversSection";
import { NewsSection } from "../feature/news/components/NewsSection";


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
        Top Movers
      </Text>
      <TopMoversSection/>
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
          Ultime News 
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
          <NewsSection />
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
