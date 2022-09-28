import IoniIcons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors.constants";
import IItem from "../../types/IItem.type";
import { styles } from "./styles";

type CartItemProps = {
  item: IItem;
  onDelete: (id: number) => void;
};

const CartItem = ({ item, onDelete }: CartItemProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.detailQty}>Cant: {item.quantity}</Text>
        <Text style={styles.detailPrice}>Precio: $ {item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <IoniIcons name="trash" size={20} color={colors.secondary} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
