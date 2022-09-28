import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  title: {
    fontSize: 22,
    padding: 14,
    fontFamily: "monserrat-bold",
    color: colors.colorAlt4,
    textAlign: "center",
  },
  button: {
    paddingTop: 25,
  },
  prompt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  promptMessage: {
    fontSize: 14,
    fontFamily: "monserrat-regular",
    color: colors.text,
    paddingVertical: 14,
  },
});
