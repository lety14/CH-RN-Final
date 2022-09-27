import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { UserProfile } from "../screens";

export type RootStackParamList = {
  UserProfile: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const UserProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UserProfile">
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default UserProfileNavigator;
