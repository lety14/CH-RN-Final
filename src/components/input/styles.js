import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 15,
    position: "relative",
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    paddingVertical: 5,
    fontFamily: "monserrat-regular",
  },
  helperText: {
    fontFamily: "monserrat-bold",
    fontSize: 12,
    color: colors.error,
  },
  password: {
    position: "absolute",
    right: 0,
    bottom: 25,
  },
});
