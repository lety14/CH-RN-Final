import React, { FC, ReactElement } from "react";
import { Modal, View } from "react-native";
import { styles } from "./styles";

interface CustomModalProps {
  children: ReactElement;
  modalVisible: boolean;
  animationType?: "none" | "slide" | "fade" | undefined;
  onRequestClose?: () => void;
}

const CustomModal: FC<CustomModalProps> = ({
  children,
  modalVisible = false,
  animationType = "fade",
  onRequestClose = () => null,
}) => {
  return (
    <Modal
      animationType={animationType}
      visible={modalVisible}
      onRequestClose={onRequestClose}
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>{children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;
