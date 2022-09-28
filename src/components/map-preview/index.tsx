import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { URL_MAPS } from "../../utils/maps";
import { ILocation } from "../location-selector";
import { styles } from "./styles";

export type MapPreviewProps = {
  location: ILocation | undefined;
  zoom?: number;
};

const MapPreview = ({ location, zoom }: MapPreviewProps) => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  useEffect(() => {
    if (location) {
      const { lat, lng } = location;
      setLatitude(lat);
      setLongitude(lng);
    }
  }, [latitude]);

  const mapPreviewUrl = URL_MAPS(latitude, longitude, zoom);

  return (
    <View style={styles.container}>
      <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
    </View>
  );
};

export default MapPreview;
