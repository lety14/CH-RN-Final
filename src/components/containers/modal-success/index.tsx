import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../../constants/colors.constants";
import CustomModal from "../../modal-component";

type ModalSuccessProps = {
  modalVisible: boolean;
};

const ModalSuccess = ({ modalVisible }: ModalSuccessProps) => {
  return (
    <CustomModal animationType="fade" modalVisible={modalVisible}>
      <View style={styles.modal}>
        <Ionicons name="checkmark-circle-outline" size={60} color={colors.colorAlt2} />
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalTitle}>Se confirmo su compra!</Text>
        </View>
      </View>
    </CustomModal>
  );
};

export default ModalSuccess;
