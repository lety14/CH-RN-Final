import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useAppSelector } from "../store/hooks";
import Tabs from "./tabs";
import AuthScreen from "../screens/auth";

const AppNavigator = () => {
  const userId = useAppSelector((state) => state.auth.userId);
  return <NavigationContainer>{userId ? <Tabs /> : <AuthScreen />}</NavigationContainer>;
};

export default AppNavigator;
