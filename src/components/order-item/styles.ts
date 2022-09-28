import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 16,
    fontFamily: "monserrat-bold",
  },
  detail: {
    paddingVertical: 10,
  },
  item: {
    paddingVertical: 2,
  },
  detailTotal: {
    fontSize: 14,
    fontFamily: "monserrat-regular",
  },
});
