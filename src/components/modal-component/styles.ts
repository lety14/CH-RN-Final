import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
  modalBox: {
    width: 300,
    height: 230,
    borderRadius: 2,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
