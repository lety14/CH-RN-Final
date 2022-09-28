import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  button: {
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    width: 140,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonSuccess: {
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: colors.colorAlt2,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    width: 140,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontFamily: "monserrat-regular",
    color: colors.white,
  },
});
