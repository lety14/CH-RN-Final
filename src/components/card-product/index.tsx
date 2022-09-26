import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import IProduct from "../../types/IProduct.type";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/colors.constants";

type ProductItemProps = {
  item: IProduct;
  onSelected: () => void;
};

const ProductItem = ({ item, onSelected }: ProductItemProps): JSX.Element => {
  return (
    // <View >
     
      <TouchableOpacity  onPress={onSelected}style={styles.container}>

        <Image source={item.image} style={styles.image}  resizeMode="stretch" />
 
      <View style={styles.info}>
        <View style={styles.location}>
        <Ionicons name="location" size={18}  />
        <Text style={styles.locationDetails}>{item.country} - {item.region}</Text>
        </View>
        <Text style={styles.name}>{item.title}</Text>
          
        <Text style={styles.price}>$ {item.price}.-</Text>
        </View>
        
      </TouchableOpacity>
    // </View>
  );
};

export default ProductItem;
