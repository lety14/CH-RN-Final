import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import {
  ButtonComponent,
  LocationSelectorComponent,
  ImageSelectorComponent,
} from "../../components";
import { ILocation } from "../../components/location-selector";
import { RootStackParamList } from "../../navigation/places";
import { useAppDispatch } from "../../store/hooks";
import { savePlace } from "../../store/slices/places.slice";
import { styles } from "./styles";

type PlaceDetailsProps = NativeStackScreenProps<RootStackParamList, "NewPlaces">;

const NewPlacesScreen = ({ navigation }: PlaceDetailsProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState("");
  const [isValidData, setIsValidData] = useState<boolean>();
  const [location, setLocation] = useState<ILocation>({ lat: 0, lng: 0 });

  const dispatch = useAppDispatch();

  const onHandleSubmit = () => {
    if (
      title !== "" &&
      description !== "" &&
      image !== "" &&
      location.lat !== 0 &&
      location.lng !== 0
    ) {
      dispatch(savePlace(title, description, image, location));
      navigation.navigate("Places");
    } else {
      setIsValidData(true);
    }
  };

  const onHandleImageSelect = (imageUrl: string) => {
    setImage(imageUrl);
  };

  const onHandleLocationSelect = (location: ILocation) => {
    setLocation(location);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Nueva ubicacion"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <TextInput
          multiline
          style={styles.input}
          placeholder="Descripción"
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
        <View style={styles.component}>
          <ImageSelectorComponent onImage={onHandleImageSelect} />
        </View>
        <View style={styles.component}>
          <LocationSelectorComponent onLocation={onHandleLocationSelect} />
        </View>
        <View style={styles.component}>
          {isValidData && <Text style={styles.errorMessage}>Complete todos los campos</Text>}
          <ButtonComponent text="Guardar" onPress={onHandleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default NewPlacesScreen;
