import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import OffertsNavigator from "./offerts";
import UserProfileNavigator from "./user-profile";

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
                <Ionicons name={focused ? "home" : "home-outline"} size={22} color="black" />
              </View>
            );
          },
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
                <Ionicons name={focused ? "person-circle" : "person-circle-outline"} size={22} color="black" />
              </View>
            );
          },
        }}
      />

    </BottomTab.Navigator>
  );
};

export default Tabs;
