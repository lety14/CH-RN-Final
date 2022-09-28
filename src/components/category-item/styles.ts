import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: colors.white,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
  },
  containerTouchable: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  icon: {
    height: 60,
    width: 60,
  },
  name: {
    fontSize: 20,
    fontFamily: "monserrat-bold",
    color: colors.black,
    textAlign: "left",
  },
  description: {
    fontSize: 14,
    fontFamily: "monserrat-regular",
    color: colors.black,
    textAlign: "left",
  },
  details: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "flex-start",
    textAlign: "left",
    justifyContent: "space-around",
    paddingLeft: 15,
  },
});
