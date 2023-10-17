import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/style";
import { VStack } from "../components/layout/Stack";
import { BaseButton } from "../components/layout/Button";
import { Container } from "../components/layout/Container";
import { NavigationType } from "../feature/navigation/types";

export const WelcomePage = ({ navigation }: { navigation: NavigationType }) => (
  <View style={GlobalStyles.main}>
    <Container style={style.container}>
      <VStack style={style.stack}>
        <Image
          style={style.imageStyle}
          source={require(`../images/premium.png`)}
        ></Image>
        <Text
          style={{
            color: `white`,
            textAlign: `center`,
            width: `100%`,
          }}
        >
          Welcome to the app, please login or register
        </Text>
      </VStack>
      <VStack style={style.stack}>
        <View style={style.btn_container}>
          <BaseButton
            style={style.buttonStyle}
            onPress={() => {
              navigation.navigate(`LoginScreen`);
            }}
          >
            <Text
              style={{
                color: `white`,
              }}
            >
              Login
            </Text>
          </BaseButton>
        </View>
        <View style={style.btn_container}>
          <BaseButton
            style={[style.buttonStyle, style.registerBtnStyle]}
            onPress={() => {
              navigation.navigate(`SignupScreen`);
            }}
          >
            <Text
              style={{
                color: `white`,
              }}
            >
              Register
            </Text>
          </BaseButton>
        </View>
      </VStack>
    </Container>
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
    rowGap: 16,
  },
  imageStyle: {
    width: 200,
    height: 200,
    display: `flex`,
    alignSelf: `center`,
  },
  stack: {
    rowGap: 8,
    width: `100%`,
  },
  btn_container: {
    width: `100%`,
    alignSelf: `center`,
  },
  buttonStyle: {
    columnGap: 8,
    height: 40,
    width: `100%`,
    borderRadius: 100,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `#6e26a4`,
  },
  registerBtnStyle: {
    backgroundColor: `#222`,
    color: `white`,
  },
});
