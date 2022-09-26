import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "space-between",
    shadowColor: "#000",
    margin:20,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2,
    elevation: 8,
  },

  image: {
    height: 250,
    width: "100%",
    resizeMode: "contain",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

  },
  info: {
    flex: 1,
 backgroundColor:colors.colorAlt3,
     borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
     paddingHorizontal: 20,
     paddingVertical: 8,
  },
  location: {
    flexDirection: "row"
  },
  name: {
    fontSize: 16,
    fontFamily: "monserrat-regular",
    color: colors.white,
  },
  locationDetails: {
    fontSize: 12,
    paddingLeft:5,
    color: colors.white,
    fontFamily: "monserrat-regular",
  },
  price: {
    fontSize: 16,
    lineHeight: 40,
    fontFamily: "monserrat-regular",
    color: colors.white,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: colors.black,
    borderColor: colors.black,
  },
  buttonText: {
    fontFamily: "monserrat-regular",
    fontSize: 17,
    color: colors.white,
  },
});
