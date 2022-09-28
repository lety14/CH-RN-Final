import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/colors.constants";

type ButtonWithConfirmationProps = {
  text: string;
  icon: "add-circle-outline";
  textSuccess: string;
  iconSuccess: "checkmark-circle-outline";
  onHandleClick: () => void;
};

const ButtonWithConfirmation = ({
  text,
  icon,
  textSuccess,
  iconSuccess,
  onHandleClick,
}: ButtonWithConfirmationProps) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const onPress = () => {
    setIsAddedToCart(!isAddedToCart);
    onHandleClick();
  };

  useEffect(() => {
    if (isAddedToCart) {
      setTimeout(() => {
        setIsAddedToCart(false);
      }, 2500);
    }
  }, [isAddedToCart]);

  return (
    <View>
      {!isAddedToCart ? (
        <TouchableOpacity onPress={() => onPress()} style={styles.button}>
          <Text style={styles.text}>{text}</Text>
          <Ionicons name={icon} size={30} color={colors.white} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled style={styles.buttonSuccess}>
          <Text style={styles.text}>{textSuccess}</Text>
          <Ionicons name={iconSuccess} size={30} color={colors.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ButtonWithConfirmation;
