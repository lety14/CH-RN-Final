import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical:15
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    paddingVertical:5,    
    fontFamily: "monserrat-regular",
    //
    // margin: 10,
    // flex: 1,
    // backgroundColor: 'transparent',
    // borderColor: 'white',
    // borderWidth: 30,
    // overflow: 'hidden',
    // shadowColor: '#000',
    // shadowRadius: 10,
    // shadowOpacity: 1,
  },

  message: {},
  helperText: {
    fontFamily: "monserrat-bold",
    fontSize: 12,
    color: colors.error,
  },
});
