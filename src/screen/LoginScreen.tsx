import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import { GlobalStyles } from "../constants/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TopBar } from "../components/layout/TopBar";
import { Container } from "../components/layout/Container";
import { VStack } from "../components/layout/Stack";
import { BaseButton } from "../components/layout/Button";
import { NavigationType } from "../feature/navigation/types";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email().required(`Email is required`),
  password: yup
    .string()
    .min(8, `Password must be at least 8 characters long`)
    .max(16, `Password must be at most 16 characters long`)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      `Password must contain at least one uppercase letter, one lowercase letter and one number`
    )
    .required(`Password is required`),
});

const formInitialValues = {
  email: ``,
  password: ``,
};

export const LoginScreen = ({ navigation }: { navigation: NavigationType }) => {
  const handleLogin = React.useCallback(() => {
    navigation.navigate(`HomeScreen`);
  }, [navigation]);

  const handleResetPasswordRoute = React.useCallback(() => {
    navigation.navigate(`ForgotPasswordScreen`);
  }, [navigation]);
  return (
    <View style={GlobalStyles.main}>
      <SafeAreaView>
        <StatusBar style="inverted" />
        <TopBar title="Login" />
      </SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            flex: 1,
          }}
        >
          <Formik
            initialValues={formInitialValues}
            onSubmit={() => {
              handleLogin();
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => {
              const isValid = !errors.email && !errors.password;
              const isTouched = touched.email && touched.password;
              return (
                <Container>
                  <VStack style={styles.stackContainer}>
                    <VStack style={styles.singleStack}>
                      <Text
                        style={{
                          fontSize: 24,
                          fontWeight: `bold`,
                          color: `white`,
                        }}
                      >
                        Accedi
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: `white`,
                        }}
                      >
                        Accedi con le tue credenziali
                      </Text>
                    </VStack>

                    <VStack style={styles.singleStack}>
                      <TextInput
                        placeholder="Email"
                        keyboardAppearance="dark"
                        autoComplete="email"
                        value={values.email}
                        onChangeText={handleChange(`email`)}
                        onBlur={handleBlur(`email`)}
                        style={styles.input}
                      ></TextInput>
                      {errors.email && touched.email && <Text style={{
                        fontSize: 12,
                        color: GlobalStyles.redText200.color
                      }}>{errors.email}</Text>}
                      <TextInput
                        placeholder="Password"
                        secureTextEntry
                        keyboardAppearance="dark"
                        value={values.password}
                        onChangeText={handleChange(`password`)}
                        onBlur={handleBlur(`password`)}
                        autoComplete="password"
                        style={styles.input}
                      ></TextInput>
                      {errors.password && touched.password && (
                        <Text style={{
                          fontSize: 12,
                          color: GlobalStyles.redText200.color
                        }}>{errors.password}</Text>
                      )}
                      <Pressable
                        onPress={handleResetPasswordRoute}
                        style={{
                          marginTop: 8,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            color: `#9f26a4`,
                            textDecorationLine: `underline`,
                          }}
                        >
                          Hai dimenticato la password?
                        </Text>
                      </Pressable>
                    </VStack>
                  </VStack>
                  <SafeAreaView style={styles.container}>
                    <BaseButton
                      disabled={!isValid || !isTouched}
                      style={[styles.buttonStyle, !isValid || !isTouched ? styles.disabledButtonStyle : {}]}
                      onPress={handleSubmit}
                    >
                      <Text
                        style={{
                          color: !isValid || !isTouched ? `#555` : `white`,
                        }}
                      >
                        Accedi
                      </Text>
                    </BaseButton>
                  </SafeAreaView>
                </Container>
              );
            }}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  stackContainer: {
    rowGap: 16,
    flex: 1,
    width: `100%`,
    justifyContent: `flex-start`,
  },
  singleStack: {
    rowGap: 8,
    width: `100%`,
  },
  input: {
    backgroundColor: `#333`,
    color: `white`,
    borderColor: `#555`,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    width: `100%`,
  },
  container: {
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
  disabledButtonStyle: {
    backgroundColor: `#333`,
  }
});
