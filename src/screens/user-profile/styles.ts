import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    justifyContent: "center",
    position: "relative",
  },
  buttonOptions: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    alignItems: "center",
    marginBottom: 25,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,

    elevation: 8,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    width: 100,
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonOptionText: {
    fontSize: 16,
    fontFamily: "monserrat-bold",
    textTransform: "uppercase",
    color: colors.black,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "monserrat-regular",
  },
});
