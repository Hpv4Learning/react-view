import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GlobalStyles } from "../constants/style";
import { TopBar } from "../components/layout/TopBar";
import { PremiumBanner } from "../components/PremiumBanner";
import { TokenList } from "../feature/saved/components/TokenList";
import { TopMoversSection } from "../feature/top-movers/components/TopMoversSection";
import { NewsSection } from "../feature/news/components/NewsSection";
import { Container } from "../components/layout/Container";
import { BottomNavigation } from "../components/layout/BottomNavigation";

export const HomeScreen = ({
  navigation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any>;
}) => (
  <View style={GlobalStyles.main}>
    <SafeAreaView
      style={{
        backgroundColor: `#222`,
      }}
    >
      <StatusBar style="inverted" />
      <TopBar title="Home" />
    </SafeAreaView>
    <ScrollView
      style={styles.box}
      contentContainerStyle={{ paddingVertical: 24 }}
    >
      <Container>
        <Text
          style={{
            fontSize: 18,
            fontWeight: `bold`,
            color: `white`,
          }}
        >
          Top Movers
        </Text>
      </Container>
      <TopMoversSection />
      <Container
        style={{
          marginTop: 32,
        }}
      >
        <PremiumBanner />
      </Container>

      <Container
        style={{
          marginTop: 32,
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
      </Container>
      <View
        style={{
          marginTop: 32,
        }}
      >
        <Container>
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
        </Container>

        <View
          style={{
            marginTop: 12,
          }}
        >
          <NewsSection />
        </View>
      </View>
    </ScrollView>
    <SafeAreaView>
      <BottomNavigation />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
});
