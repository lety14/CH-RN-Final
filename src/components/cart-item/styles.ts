import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#cecece",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 16,
    fontFamily: "monserrat-bold",
    marginBottom: 5,
  },
  detailQty: {
    fontSize: 14,
    fontFamily: "monserrat-regular",
    marginBottom: 5,
  },
  detailPrice: {
    fontSize: 14,
    fontFamily: "monserrat-regular",
  },
});
