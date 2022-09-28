import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    justifyContent: "space-between",
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  info: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    position: "relative",
  },
  location: {
    flexDirection: "row",
    paddingBottom: 8,
  },
  name: {
    fontSize: 15,
    fontFamily: "monserrat-bold",
    paddingVertical: 5,
  },
  locationDetails: {
    fontSize: 12,
    paddingLeft: 5,
    fontFamily: "monserrat-bold",
  },
  price: {
    fontSize: 16,
    fontFamily: "monserrat-regular",
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: colors.white,
    borderColor: colors.black,
  },
  buttonText: {
    fontFamily: "monserrat-regular",
    fontSize: 17,
  },
  infoSeeMore: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonSeeMore: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5,
  },
  seeMore: {
    fontFamily: "monserrat-bold",
    color: colors.white,
  },
});
