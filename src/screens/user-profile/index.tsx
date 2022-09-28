import React from "react";
import { Image, View } from "react-native";
import { ButtonComponent } from "../../components";
import { signOut } from "../../store/slices/auth.slice";
import { useAppDispatch } from "../../store/hooks";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/user-profile";

type UserProfileProps = NativeStackScreenProps<RootStackParamList, "UserProfile">;

const UserProfile = ({ navigation }: UserProfileProps) => {
  const dispatch = useAppDispatch();

  const onHandleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require("../../../assets/user-profile.png")} style={styles.image} /> */}
      <View style={styles.button}>
        <ButtonComponent onPress={() => navigation.navigate("Orders")} text="ORDERS" />
      </View>

      <View style={styles.button}>
        <ButtonComponent onPress={onHandleLogOut} text="Log out" />
      </View>
    </View>
  );
};

export default UserProfile;
