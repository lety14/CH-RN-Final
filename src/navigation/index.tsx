import { NavigationContainer } from "@react-navigation/native";
import OffertsNavigator from "./offerts";
import React from "react";
import { useAppSelector } from "../store/hooks";
import Tabs from "./tabs";
import AuthScreen from "../screens/auth";

//  const AppNavigator = () => {
//    const userId = useAppSelector((state) => state.auth.userId);
//    return <NavigationContainer>{userId ? <Tabs /> : <AuthScreen />}</NavigationContainer>;
//  };

const AppNavigator = () => {
  const userId = useAppSelector((state) => state.auth.userId);
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default AppNavigator;
