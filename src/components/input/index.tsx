import React, { FC, useState } from "react";
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/colors.constants";

type InputProps = {
  hasError: boolean;
  error: boolean;
  touched: boolean;
};

const Input: FC<TextInputProps & InputProps> = ({
  editable,
  value = "",
  onChangeText,
  onFocus,
  onBlur,
  maxLength,
  placeholder,
  placeholderTextColor,
  keyboardType,
  hasError,
  error,
  touched,
  secureTextEntry,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={!showPassword}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
      />
      {hasError && touched && (
        <View>
          <Text style={styles.helperText}>{error}</Text>
        </View>
      )}
      {secureTextEntry && (
        <View style={styles.password}>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Input;
