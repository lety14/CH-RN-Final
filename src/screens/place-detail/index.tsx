import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { colors } from "../../constants/colors.constants";
import { RootStackParamList } from "../../navigation/user-profile";
import { useAppSelector } from "../../store/hooks";
import { styles } from "./styles";

type PlaceDetailsProps = NativeStackScreenProps<RootStackParamList, "PlaceDetails">;

const PlaceDetails = ({ navigation, route }: PlaceDetailsProps) => {
  const { placeID } = route.params;

  const place = useAppSelector((state) =>
    state.places.places.find((place) => place.id === placeID)
  );

  const locationById =
    place?.coords.lat && place?.coords?.lng
      ? { lat: place?.coords.lat, lng: place?.coords?.lng }
      : undefined;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.addressContainer}>
        <Text style={styles.title}>{place?.title}</Text>
        <Text style={styles.address}>{place?.address}</Text>
      </View>
      <Image source={{ uri: place?.image }} style={styles.image} />
      <Text style={styles.description}>{place?.description}</Text>
    </ScrollView>
  );
};
export default PlaceDetails;
