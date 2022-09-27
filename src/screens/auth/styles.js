import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";


export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: "monserrat-regular",
    textAlign: "center",
  },
  button: {
    paddingTop:25
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
    paddingVertical:10
  },
});
