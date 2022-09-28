import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";
import MapPreview from "../map-preview";
import LayoutSelector from "../layout-selector";
import { useNavigation, useRoute } from "@react-navigation/native";

type LocationSelectorProps = {
  onLocation: (obj: ILocation) => void;
};

export type ILocation = {
  lat: number;
  lng: number;
};

const LocationSelector = ({ onLocation }: LocationSelectorProps): JSX.Element => {
  const [pickedLocation, setPickedLocation] = useState<ILocation>();
  const route = useRoute();
  const navigation = useNavigation();
  const mapLocation: ILocation = route?.params?.mapLocation;

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocation(mapLocation);
    }
  }, [mapLocation]);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Premisos insuficientes", "Necesitamos permisos para usar la localizacion", [
        { text: "ok" },
      ]);
      return false;
    }
    return true;
  };

  const onHandleGetLocation = async () => {
    const hasLocationPermission = await verifyPermissions();

    if (!hasLocationPermission) return;
    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });
    const { latitude, longitude } = location.coords;
    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
  };

  const onHandlePickLocation = async () => {
    const hasLocationPermission = await verifyPermissions();

    if (!hasLocationPermission) return;
    navigation.navigate("Maps");
  };

  return (
    <LayoutSelector
      buttonIcon="map"
      message="No has seleccionado una ubicación"
      picked={pickedLocation !== undefined}
      onHandle={onHandlePickLocation}
      buttonIconAdditional="locate"
      onHandleAdditional={onHandleGetLocation}>
      <MapPreview location={pickedLocation} />
    </LayoutSelector>
  );
};

export default LocationSelector;
