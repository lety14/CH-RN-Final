import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../navigation/places";
import MapView, { Marker } from "react-native-maps";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { ILocation } from "../../components/location-selector";
import { colors } from "../../constants/colors.constants";
import { useAppDispatch } from "../../store/hooks";
import { saveCoords } from "../../store/slices/places.slice";

type MapsProps = NativeStackScreenProps<RootStackParamList, "Maps">;

const Maps = ({ navigation }: MapsProps) => {
  const dispatch = useAppDispatch();
  const [selectedLocation, setSelectedLocation] = useState<ILocation>();
  const initialRegion = {
    latitude: -34.6132949,
    longitude: -58.435882,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onHandleSaveLocation}>
          <IonicIcons name="md-save-sharp" size={30} color={colors.secondary} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const onHandlePickLocation = (e: any) => {
    console.log(e.nativeEvent.coordinate);

    setSelectedLocation({
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude,
    });
    dispatch(
      saveCoords({
        lat: e.nativeEvent.coordinate.latitude,
        lng: e.nativeEvent.coordinate.longitude,
      })
    );
  };

  const onHandleSaveLocation = () => {
    if (selectedLocation) {
      navigation.navigate("NewPlaces", { mapLocation: selectedLocation });
    }
  };

  return (
    <MapView style={styles.container} initialRegion={initialRegion} onPress={onHandlePickLocation}>
      {selectedLocation && (
        <Marker
          title="Ubicación seleccionada"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Maps;
