import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  containerActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
