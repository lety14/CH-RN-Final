import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.white,
    padding:30
  },
  image: {
    height: 100,
    marginVertical:30,
    width:"100%",
    // borderColor: colors.black,
    // borderRadius: 20,
    resizeMode:"contain"
  },
  button: {
    marginVertical:30,
  }
});
