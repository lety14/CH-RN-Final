import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signOut } from "../../store/slices/auth.slice";
import { useAppDispatch } from "../../store/hooks";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/user-profile";
import { colors } from "../../constants/colors.constants";
import { SafeAreaView } from "react-native-safe-area-context";

type UserProfileProps = NativeStackScreenProps<RootStackParamList, "UserProfile">;

const UserProfile = ({ navigation }: UserProfileProps) => {
  const dispatch = useAppDispatch();

  const onHandleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onHandleLogOut} style={styles.button}>
        <Ionicons name="log-out-outline" size={18} color={colors.black} />
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.buttonOptions}
          onPress={() => navigation.navigate("Orders")}>
          <Text style={styles.buttonOptionText}>Mis viajes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOptions}
          onPress={() => navigation.navigate("Places")}>
          <Text style={styles.buttonOptionText}>Mis reseñas</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
