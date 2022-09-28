import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 15,
    backgroundColor: colors.secondary,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    width: "100%",
    alignItems: "center",
  },
  buttonSuccess: {
    padding: 12,
    borderRadius: 15,
    backgroundColor: colors.colorAlt2,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "monserrat-regular",
    color: colors.white,
  },
});
