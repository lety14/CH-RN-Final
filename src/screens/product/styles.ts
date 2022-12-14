import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    height: 250,
    width: "95%",
    marginTop: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 15,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 250,
    borderRadius: 15,
  },
  name: {
    fontSize: 20,
    paddingVertical: 10,
    paddingLeft: 10,
    width: "100%",
    fontFamily: "monserrat-bold",
    position: "absolute",
    bottom: 0,
    color: colors.white,
  },
  pack: {
    fontSize: 16,
    paddingTop: 10,
    fontFamily: "monserrat-bold",
  },
  details: {
    flex: 1,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 25,
    paddingVertical: 15,
    fontFamily: "monserrat-regular",
  },
  detail: {
    fontSize: 14,
    fontFamily: "monserrat-regular",
    paddingTop: 8,
  },
  sectionBuy: {
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    borderTopColor: colors.black,
    borderTopWidth: 1,
  },
  map: {
    paddingTop: 30,
    height: 200,
    width: "100%",
  },
  buttonReturn: {
    position: "absolute",
    padding: 7,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    top: 10,
    left: 10,
    zIndex: 10,
  },
  buttonBuy: {
    padding: 12,
    borderRadius: 15,
    backgroundColor: colors.secondary,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
  },
  buy: {
    fontSize: 18,
    fontFamily: "monserrat-regular",
    color: colors.white,
  },
  price: {
    fontSize: 16,
    fontFamily: "monserrat-bold",
  },
});
