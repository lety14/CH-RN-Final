import { NavigationContainer } from "@react-navigation/native";
import OffertsNavigator from "./offerts";
import React from "react";

export default () => {
  return (
    <NavigationContainer>
      <OffertsNavigator />
    </NavigationContainer>
  );
};
