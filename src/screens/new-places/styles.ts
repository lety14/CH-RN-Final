import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    margin: 20,
    marginVertical: 30,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
  component: {
    paddingTop: 15,
  },
  errorMessage: {
    color: "red",
    paddingBottom: 6,
  },
});
