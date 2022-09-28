import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    height: "40%",
    minHeight: 300,
    width: "100%",
  },
  location: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
  },
  addressContainer: {
    padding: 20,
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBottom: 10,
  },
  address: {
    color: colors.white,
    fontSize: 15,
  },
  description: {
    color: colors.black,
    fontSize: 15,
    padding: 20,
  },
  map: {
    height: 250,
  },
});
