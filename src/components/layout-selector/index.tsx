import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/colors.constants";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: JSX.Element;
  picked: boolean;
  message: string;
  buttonIcon: "camera" | "map";
  onHandle: () => void;
  buttonIconAdditional?: "locate";
  onHandleAdditional?: () => void;
};

const LayoutSelector = ({
  children,
  picked,
  message,
  onHandle,
  buttonIcon,
  buttonIconAdditional,
  onHandleAdditional,
}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.preview}>{!picked ? <Text>{message}</Text> : children}</View>
      {buttonIconAdditional && (
        <TouchableOpacity onPress={onHandleAdditional}>
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            style={styles.containerTouchableAdditional}>
            <Ionicons name={`${buttonIconAdditional}`} size={22} color={colors.white} />
          </LinearGradient>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onHandle}>
        <LinearGradient
          colors={[colors.primary, colors.secondary]}
          style={styles.containerTouchable}>
          <Ionicons name={`${buttonIcon}`} size={22} color={colors.white} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default LayoutSelector;
