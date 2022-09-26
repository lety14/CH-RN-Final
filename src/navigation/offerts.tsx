import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../screens";
import Product from "../screens/product";
import Products from "../screens/products";

export type RootStackParamList = {
  Home: undefined;
  Products: {
    categoryId: number;
    name: string;
  };
  Product: {
    productId: number;
    name: string;
  };
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{ title: "Ofertas" }}
      />
            <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({
          headerTitle: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
