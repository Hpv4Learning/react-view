import React from "react";
import { Keyboard, StyleSheet, Text, TextInput,  TouchableWithoutFeedback, View } from "react-native";
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
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(`Email is required`),
});

export const ForgotPasswordScreen = ({
  navigation,
}: {
  navigation: NavigationType;
}) => {
  const handleResetPassword = React.useCallback(() => {
    navigation.navigate(`HomeScreen`);
  }, [navigation]);
  return (
    <View style={GlobalStyles.main}>
      <SafeAreaView>
        <StatusBar style="inverted" />
        <TopBar title="Recupera" />
      </SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        
      <View
        style={{
          flex: 1,
        }}
      >
        <Formik onSubmit={() => handleResetPassword()} initialValues={initialValues} validationSchema={validationSchema}>
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
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
                Recupera password
              </Text>
            </VStack>
            <VStack style={styles.singleStack}>
              <TextInput
                placeholder="Email"
                keyboardAppearance="dark"
                autoComplete="email"
                autoCapitalize="none"
                onChangeText={handleChange(`email`)}
                onBlur={handleBlur(`email`)}
                style={styles.input}
              ></TextInput>
            </VStack>
          </VStack>
          <SafeAreaView style={styles.container}>
            <BaseButton style={[styles.buttonStyle, 
              Object.keys(errors).length > 0 && Object.keys(touched).length > 0 ? styles.disabledButtonStyle : {backgroundColor: `#6e26a4`}  
          ]} onPress={handleSubmit} 
            disabled={Object.keys(errors).length > 0 && Object.keys(touched).length > 0}
            >
              <Text
                style={{
                  color: Object.keys(errors).length > 0 && Object.keys(touched).length > 0 ? `#555` : `white`,
                }}
              >
                Recupera
              </Text>
            </BaseButton>
          </SafeAreaView>
        </Container>
          )}
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
