import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Cart } from "../screens";

export type RootStackParamList = {
  Cart: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const CartNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
