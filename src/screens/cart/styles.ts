import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  title: {
    alignSelf: "flex-start",
    fontFamily: "monserrat-bold",
    fontSize: 25,
    paddingVertical: 20,
  },
  subtitle: {
    fontFamily: "monserrat-regular",
    fontSize: 16,
    paddingVertical: 15,
  },
  buttonConfirm: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonConfirmDisabled: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
  },
  item: {
    paddingBottom: 10,
  },
  footer: {
    borderTopColor: colors.black,
    borderTopWidth: 1,
    paddingVertical: 3,
  },
  resume: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },
  buy: {
    color: colors.white,
    fontFamily: "monserrat-bold",
    fontSize: 18,
  },
  buyDisabled: {
    fontFamily: "monserrat-bold",
    fontSize: 18,
    color: "#a8a8a8",
  },
  totalDisabled: {
    color: "#a8a8a8",
    fontFamily: "monserrat-bold",
    fontSize: 16,
  },
  total: {
    color: colors.white,
    fontFamily: "monserrat-bold",
    fontSize: 16,
  },
});
