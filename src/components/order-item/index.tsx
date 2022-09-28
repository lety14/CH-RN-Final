import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { TouchableOpacity, View, Text, FlatList } from "react-native";
import { colors } from "../../constants/colors.constants";
import IItem from "../../types/IItem.type";
import { IOrder } from "../../types/IOrder.type";
import { formatDate } from "../../utils/formDate";
import { styles } from "./styles";

type OrderItemProps = {
  order: IOrder;
  onDelete: (id: string) => void;
};

const OrderItem = ({ order, onDelete }: OrderItemProps) => {
  const renderItem = ({ item, index }: { item: IItem; index: number }): JSX.Element => (
    <View style={styles.item}>
      <Text>-{item.title}</Text>
      <Text> {item.date}</Text>
    </View>
  );
  const keyExtractor = (order: IItem, index: number) => order.id.toString();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{formatDate(order.date)}</Text>
        <Text style={styles.detailTotal}>$ {order.total}</Text>
        <View style={styles.detail}>
          <Text>Detalles:</Text>
          <FlatList data={order.items} renderItem={renderItem} keyExtractor={keyExtractor} />
        </View>
      </View>
      <TouchableOpacity onPress={() => onDelete(order.id)}>
        <Ionicons name="trash" size={20} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};
export default OrderItem;
