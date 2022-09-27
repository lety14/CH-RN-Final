import React, { FC } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type InputProps = {
  hasError:boolean,
  error:boolean,
  touched: boolean,
}

const Input:FC<TextInputProps & InputProps> = ({
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
}) => {
  return (
    <View style={styles.container}>
        <TextInput      
          style={styles.input}
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        />
      {hasError && touched && (
        <View style={styles.message}>
          <Text style={styles.helperText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
