import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors.constants";
import { styles } from "./styles";

type ButtonComponentProps = {
  onPress: () => void;
  text: string;
};

const ButtonComponent = ({ onPress, text }: ButtonComponentProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={[colors.primary, colors.secondary]} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
