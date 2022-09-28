import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import ICategory from "../../types/ICategory.type";
import { styles } from "./styles";

type CategoryItemProps = {
  item: ICategory;
  onSelected: () => void;
};

const CategoryItem = ({ item, onSelected }: CategoryItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ ...styles.containerTouchable }} onPress={onSelected}>
        <Image source={item?.image} style={styles.icon} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
