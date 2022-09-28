import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ButtonWithConfirmationProps = {
  text: string;
  textSuccess: string;
  onHandleClick: () => void;
};

const ButtonWithConfirmation = ({
  text,
  textSuccess,
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
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled style={styles.buttonSuccess}>
          <Text style={styles.text}>{textSuccess}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ButtonWithConfirmation;
