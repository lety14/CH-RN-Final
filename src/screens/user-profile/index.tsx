import React from "react";
import { Image, View } from "react-native";
import { ButtonComponent } from "../../components";
import { signOut } from "../../store/auth.slice";
import { useAppDispatch } from "../../store/hooks";
import { styles } from "./styles";


const UserProfile = () => {
  const dispatch = useAppDispatch();

  const onHandleLogOut = () => {
  dispatch(signOut())
}

 return (
<View style={styles.container}>
     <Image source={require("../../../assets/user-profile.png")} style={styles.image} />
 <View style={styles.button}>
     <ButtonComponent onPress={onHandleLogOut} text="Log out"   />
   </View ></View>
  );
};

export default UserProfile;
