import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 6,
    width: "100%",
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
    textAlign: "center",
  },
});
