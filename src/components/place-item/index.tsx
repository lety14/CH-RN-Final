import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type PlaceItemProps = {
  id: number;
  title: string;
  image: string;
  address: string;
  onSelect: () => void;
};

const PlaceItem = ({ id, title, image, address, onSelect }: PlaceItemProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
