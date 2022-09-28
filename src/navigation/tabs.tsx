import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import OffertsNavigator from "./offerts";
import UserProfileNavigator from "./user-profile";
import CartNavigator from "./cart";
import { colors } from "../constants/colors.constants";
import { LinearGradient } from "expo-linear-gradient";

const Tabs = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator initialRouteName="ShopTab" screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="ShopTab"
        component={OffertsNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={25}
                  color={focused ? "#F65734" : "black"}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <LinearGradient
              colors={focused ? ["#5e5e5e", "#000000"] : ["#FF8D74", "#F65734"]}
              style={{
                backgroundColor: colors.white,
                padding: 15,
                borderRadius: 100,
                position: "absolute",
                bottom: 5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 15,
              }}>
              <Ionicons name={focused ? "cart" : "cart-outline"} size={25} color={colors.white} />
            </LinearGradient>
          ),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="UserTab"
        component={UserProfileNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Ionicons
                  name={focused ? "person-circle" : "person-circle-outline"}
                  size={30}
                  color={focused ? "#F65734" : "black"}
                />
              </View>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
