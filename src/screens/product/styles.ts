import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    height: 300,
    width:"100%",


    
  },
  image: {
    height: "100%",
    width:"100%",
    resizeMode: "cover",
    
  },
  name: {
    fontSize: 20,
    paddingVertical: 10,
    paddingLeft: 10,
    fontFamily: "monserrat-regular",
    backgroundColor: "#00000040",
    bottom: 50,
    color:colors.white,
  },
  pack: {
    fontSize: 17,
    paddingTop: 10,
    fontFamily: "monserrat-bold",
  },
  details: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical:30
  },
  description: {
    fontSize: 16,
    lineHeight: 25,
    paddingVertical: 15,
    fontFamily: "monserrat-regular",
  },
  detail: {
    fontSize: 14,
    fontFamily: "monserrat-regular",
    paddingTop: 8,
  },
  resume: {
    padding: 15,
    justifyContent: "space-between",
    flexDirection:"row",
    width: "100%",
    backgroundColor: colors.primary,

    
  },
  price: {
    fontSize: 18,
    fontFamily: "monserrat-bold",
    color: colors.white,
  },
});
