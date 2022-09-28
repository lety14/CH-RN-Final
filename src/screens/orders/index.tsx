import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { OrderItem } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteOrdersFromApi, getOrdersFromApi } from "../../store/slices/order.slice";
import { IOrder } from "../../types/IOrder.type";
import { styles } from "./styles";

const Orders = () => {
  const orders = useAppSelector((state) => state.orders.orders);
  const userId = useAppSelector((state) => state.auth.userId);

  const dispatch = useAppDispatch();

  console.log(orders);

  const handleOnDelete = (id: string) => {
    dispatch(deleteOrdersFromApi(id));
  };

  useEffect(() => {
    if (userId) {
      dispatch(getOrdersFromApi());
    }
  }, [userId]);

  const renderItem = ({ item, index }: { item: IOrder; index: number }): JSX.Element => (
    <View style={styles.item}>
      <OrderItem order={item} onDelete={handleOnDelete} />
    </View>
  );
  const keyExtractor = (order: IOrder, index: number) => order.id.toString();

  return (
    <View style={styles.container}>
      <FlatList data={orders} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Orders;
