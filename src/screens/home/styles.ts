import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    position: "relative",
    height: 250,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 250,
  },
  brandContainer: {
    padding: 20,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  brand: {
    fontSize: 40,
    textShadowColor: colors.primary,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 20,
    fontFamily: "noto-sans-black",
    color: colors.white,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "monserrat-bold",
    color: colors.white,
  },

  image: {
    height: 250,
    width: "100%",
    borderColor: colors.black,
  },
  titleContainer: {
    position: "relative",
  },
  title: {
    fontFamily: "monserrat-bold",
    fontSize: 18,
    padding: 10,
    paddingLeft: 15,
  },
  details: {
    width: "100%",
    height: "100%",
    // padding: 20,
    paddingTop: 35,
    // borderTopColor: colors.black,
    // borderTopWidth: 5,
  },
  grid: {
    flex: 1,
  },
});
