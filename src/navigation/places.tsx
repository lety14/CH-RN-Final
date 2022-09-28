import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { Maps, NewPlaces, PlaceDetails, PlaceList } from "../screens";
import { ILocation } from "../components/location-selector";
import { colors } from "../constants/colors.constants";

export type RootStackParamList = {
  Places: undefined;
  Maps: undefined;
  NewPlaces: {
    mapLocation: ILocation;
  };
  PlaceDetails: {
    placeID: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Places">
      <Stack.Screen
        name="Places"
        component={PlaceList}
        options={({ navigation }) => ({
          title: "Mis viajes",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewPlaces")}>
              <IonicIcons name="add-circle-outline" size={38} color={colors.secondary} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="NewPlaces" component={NewPlaces} options={{ title: "Agregar lugar" }} />
      <Stack.Screen name="PlaceDetails" component={PlaceDetails} options={{ title: "Detalles" }} />
      <Stack.Screen name="Maps" component={Maps} options={{ title: "Mapas" }} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
