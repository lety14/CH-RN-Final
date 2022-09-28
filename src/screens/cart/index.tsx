import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartItem, ModalSuccess } from "../../components";
import { RootStackParamList } from "../../navigation/cart";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { confirmCarFromApi, deleteItem } from "../../store/slices/cart.slice";
import IItem from "../../types/IItem.type";
import { styles } from "./styles";

type CartProps = NativeStackScreenProps<RootStackParamList, "Cart">;

const Cart = ({ navigation }: CartProps) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.userId);
  const items = useAppSelector((state) => state.cart.items);
  const total = useAppSelector((state) => state.cart.total);
  const disabledButton = total === 0;

  const [successTransaction, setSuccessTransaction] = useState(false);

  useEffect(() => {
    if (successTransaction) {
      setTimeout(() => {
        setSuccessTransaction(false);
      }, 2500);
    }
  }, [successTransaction]);

  const onHandleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  const onHandleConfirm = () => {
    if (userId) {
      setSuccessTransaction(true);
      dispatch(confirmCarFromApi(userId, items, total));
    }
  };

  const keyExtractor = (item: IItem, index: number) => index.toString();
  const renderItem = ({ item }: { item: IItem }) => (
    <CartItem item={item} onDelete={() => onHandleDelete(item.id)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mi reserva</Text>
      <Text style={styles.subtitle}>Estas reservando:</Text>
      <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} />
      <View>
        <View style={styles.footer}>
          <TouchableOpacity disabled={disabledButton} onPress={onHandleConfirm}>
            <LinearGradient
              style={disabledButton ? styles.buttonConfirmDisabled : styles.buttonConfirm}
              colors={disabledButton ? ["#c2c2c2", "#c2c2c2"] : ["#FF8D74", "#F65734"]}>
              <Text style={disabledButton ? styles.buyDisabled : styles.buy}>COMPRAR</Text>
              <View style={styles.resume}>
                <Text style={disabledButton ? styles.totalDisabled : styles.total}>Total:</Text>
                <Text style={disabledButton ? styles.totalDisabled : styles.total}>$ {total}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <ModalSuccess modalVisible={successTransaction} />
    </SafeAreaView>
  );
};

export default Cart;
