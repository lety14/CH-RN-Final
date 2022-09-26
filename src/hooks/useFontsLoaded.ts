import { useFonts } from "expo-font";

export default function useFontsLoaded() {
  const [loaded] = useFonts({
    "noto-sans-black": require("../../assets/fonts/NotoSans-Black.ttf"),
    "monserrat-thin": require("../../assets/fonts/Montserrat-Thin.ttf"),
    "monserrat-light": require("../../assets/fonts/Montserrat-Light.ttf"),
    "monserrat-regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
    "monserrat-bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
    mabry: require("../../assets/fonts/Mabry-Pro-Medium.ttf"),
  });

  return loaded;
}
