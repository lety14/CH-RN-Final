import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ButtonComponentProps = {
  onPress: () => void;
  text: string;
};

const ButtonComponent = ({ onPress, text }: ButtonComponentProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
