import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Orders, UserProfile } from "../screens";
import { Maps, NewPlaces, PlaceDetails, PlaceList } from "../screens";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../constants/colors.constants";
import { ILocation } from "../types/ICoords.type";

export type RootStackParamList = {
  UserProfile: undefined;
  Orders: undefined;
  Places: undefined;
  NewPlaces: {
    mapLocation: ILocation;
  };
  PlaceDetails: {
    placeID: number;
  };
  Maps: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const UserProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UserProfile">
      <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
      <Stack.Screen name="Orders" component={Orders} options={{ headerTitle: "Mis viajes" }} />
      <Stack.Screen
        name="Places"
        component={PlaceList}
        options={({ navigation }) => ({
          title: "Mis reseñas",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewPlaces")}>
              <Ionicons name="add-circle-outline" size={38} color={colors.secondary} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="NewPlaces" component={NewPlaces} options={{ title: "Agregar reseña" }} />
      <Stack.Screen name="PlaceDetails" component={PlaceDetails} options={{ title: "Detalles" }} />
      <Stack.Screen name="Maps" component={Maps} options={{ title: "Mapas" }} />
    </Stack.Navigator>
  );
};

export default UserProfileNavigator;
