import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flex: 1/2,

    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 28,
    backgroundColor: colors.white,
  },
  containerTouchable: {
    // flex: 1,
    flex: 1/2,
    padding: 20,
    justifyContent: "space-between",
    alignItems:"center",
    textAlign: "left",
    paddingLeft: 15,
  },
  icon: {
    height: 70,
    width: 70,
  },
  name: {
    fontSize: 14,
    paddingTop:5,
    fontFamily: "monserrat-regular",
    color: colors.black,
  },
  details: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "flex-start",
    textAlign: "left",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
});
