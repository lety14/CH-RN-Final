/* eslint-disable no-case-declarations */
import React, { useState, useReducer } from "react";
import { View, Text, KeyboardAvoidingView, Button, TouchableOpacity } from "react-native";
import { InputComponent} from "../../components";
import { colors } from "../../constants/colors.constants";
import { signInFromApi, signUpFromApi } from "../../store/auth.slice";
import { useAppDispatch } from "../../store/hooks";
import { onInputChange,  UPDATED_FORM } from "../../utils/forms";
import { isIOS } from "../../utils/platform-type";
import { formReducer, initialState } from "./auth.reducer";
import { styles } from "./styles";

const AuthScreen = () => {
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? "Login" : "Registro";
  const message = isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?";
  const messageTarget = isLogin ? "Ingresar" : "Registrate";

  const onHandleAuth = () => {
    const { email, password } = formState;  
   dispatch(isLogin ? signInFromApi(email.value, password.value) : signUpFromApi(email.value, password.value))
  };

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleChange = (value:string, type:string) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior={isIOS ? "padding" : "height"}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <InputComponent
          placeholder="Email"
          placeholderTextColor={colors.placerholder}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => onHandleChange(text, "email")}
          value={formState.email.value}
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
        />
        <InputComponent
          placeholder="Contraseña"
          placeholderTextColor={colors.placerholder}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(text) => onHandleChange(text, "password")}
          value={formState.password.value}
          hasError={formState.password.hasError}
          error={formState.password.error}
          touched={formState.password.touched}
        />
        <View   style={styles.button}>
        <Button
          disabled={!formState.isFormValid}
          title={messageTarget}
          color={colors.primary}
          onPress={onHandleAuth}
        /></View>
          <TouchableOpacity onPress={onHandleChangeAuth} style={styles.prompt}>
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
