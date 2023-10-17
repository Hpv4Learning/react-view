import React from "react";
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
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

const initialValues = {
  email: ``,
  password: ``,
  confirmPassword: ``,
};

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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref(`password`), ``], `Passwords must match`)
    .required(`Confirm password is required`),
});

export const SingupScreen = ({
  navigation,
}: {
  navigation: NavigationType;
}) => {
  const handleSingup = React.useCallback(() => {
    navigation.navigate(`HomeScreen`);
  }, [navigation]);
  return (
    <View style={GlobalStyles.main}>
      <SafeAreaView>
        <StatusBar style="inverted" />
        <TopBar title="Registrati" />
      </SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
        }}
      >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={() => handleSingup()}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              dirty,
              touched,
              
            }) => {
              const isValid = Object.keys(errors).length === 0;
              const isTouched = Object.keys(touched).length > 0;
              const isDirty = dirty;
              const disabled = !isValid && isTouched && isDirty;
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
                        Crea un nuovo account
                      </Text>
                    </VStack>
                    <VStack style={styles.singleStack}>
                      <TextInput
                        placeholder="Email"
                        keyboardAppearance="dark"
                        autoComplete="email"
                        onChangeText={handleChange(`email`)}
                        onBlur={handleBlur(`email`)}
                        style={styles.input}
                      ></TextInput>
                      {
                        
                        errors.email && touched.email && (
                          <Text
                            style={{
                              color: `#ff0000`,
                            }}
                          >
                            {errors.email}
                          </Text>
                        )
                      }
                      <TextInput
                        placeholder="Password"
                        secureTextEntry
                        keyboardAppearance="dark"
                        autoComplete="password"
                        onChangeText={handleChange(`password`)}
                        onBlur={handleBlur(`password`)}
                        style={styles.input}
                      ></TextInput>
                      {
                        errors.password && touched.password && (
                          <Text
                            style={{
                              color: `#ff0000`,
                            }}
                          >
                            {errors.password}
                          </Text>
                        )
                          }
                       <TextInput
                        placeholder="Conferma password"
                        secureTextEntry
                        keyboardAppearance="dark"
                        onChangeText={handleChange(`confirmPassword`)}
                        onBlur={handleBlur(`confirmPassword`)}
                        style={styles.input}
                      ></TextInput>
                      {
                        errors.confirmPassword && touched.confirmPassword && (
                          <Text
                            style={{
                              color: `#ff0000`,
                            }}
                          >
                            {errors.confirmPassword}
                          </Text>
                        )
                      }
                      <Pressable>
                        <Text
                          style={{
                            fontSize: 14,
                            color: `#9f26a4`,
                            textDecorationLine: `underline`,
                          }}
                        >
                          Sei già registrato? Accedi
                        </Text>
                      </Pressable>
                    </VStack>
                  </VStack>
                  <SafeAreaView style={styles.container}>
                    <BaseButton
                      disabled={disabled}
                      style={[styles.buttonStyle, disabled ? styles.disabledButtonStyle : {}]}
                      onPress={handleSubmit}
                    >
                      <Text
                        style={{
                          color: disabled ? `#555` : `white`,
                        }}
                      >
                        Registrati
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
  },
});
