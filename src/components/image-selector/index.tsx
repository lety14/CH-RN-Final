import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert, Image } from "react-native";
import { useAppDispatch } from "../../store/hooks";
import { styles } from "./styles";
import LayoutSelector from "../layout-selector";

type ImageSelectorProps = {
  onImage: (img: string) => void;
};

const ImageSelector = ({ onImage }: ImageSelectorProps): JSX.Element => {
  const [urlPickedImage, setUrlPickedImage] = useState<string>("");
  const dispatch = useAppDispatch();

  const verifyPremissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Premiso denegado", "Necesitamos permisos para usar la camara", [{ text: "ok" }]);
      return false;
    }
    return true;
  };
  const onHandleTakeImage = async () => {
    const hasCameraPermission = await verifyPremissions();

    if (!hasCameraPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    if (!image.cancelled) {
      setUrlPickedImage(image.uri);
      onImage(image.uri);
    }
  };

  return (
    <LayoutSelector
      buttonIcon="camera"
      message="No hay imagen seleccionada"
      picked={urlPickedImage !== ""}
      onHandle={onHandleTakeImage}>
      <Image style={styles.image} source={{ uri: urlPickedImage }} />
    </LayoutSelector>
  );
};

export default ImageSelector;
