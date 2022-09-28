import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Orders, UserProfile } from "../screens";

export type RootStackParamList = {
  UserProfile: undefined;
  Orders: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const UserProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UserProfile">
      <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
      <Stack.Screen name="Orders" component={Orders} options={{ headerTitle: "Mis ordenes" }} />
    </Stack.Navigator>
  );
};

export default UserProfileNavigator;
