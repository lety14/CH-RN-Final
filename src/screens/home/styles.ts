import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: colors.white,
    padding:15
  },
  image: {
    height: 250,
    width:"100%",
    borderColor: colors.black,
    borderRadius:20
  },
  titleContainer:{
position:"relative"
  },
  title: {
    fontFamily: "monserrat-regular",
    fontSize: 16,
    paddingVertical: 30,
  },
  grid: {
    flex: 1,
  },
});
