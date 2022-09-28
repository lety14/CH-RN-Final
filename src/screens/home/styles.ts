import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    position: "relative",
  },
  title: {
    fontFamily: "monserrat-bold",
    fontSize: 28,
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  details: {
    width: "100%",
    height: "100%",
    padding: 15,
    paddingTop: 30,
  },
  grid: {
    flex: 1,
  },
  imageFrame3: {
    position: "absolute",
    top: 10,
    left: 10,
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
  imageFrame5: {
    position: "absolute",
    top: 65,
    right: 10,
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
  imageFrame2: {
    position: "absolute",
    bottom: -10,
    left: -20,
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
  imageFrame4: {
    position: "absolute",
    bottom: -10,
    right: -10,
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
  imageFrame1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 200,
    width: 120,
    resizeMode: "contain",
  },
});
