import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import IProduct from "../../types/IProduct.type";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/colors.constants";
import { LinearGradient } from "expo-linear-gradient";

type ProductItemProps = {
  item: IProduct;
  onSelected: () => void;
};

const ProductItem = ({ item, onSelected }: ProductItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="stretch" />
      <LinearGradient style={styles.info} colors={["#ebebeb", "#ffffff"]}>
        <View style={styles.location}>
          <Ionicons name="location" size={14} color={colors.black} />
          <Text style={styles.locationDetails}>
            {item.country} - {item.region}
          </Text>
        </View>
        <View style={styles.location}>
          <Ionicons name="calendar-outline" size={14} color={colors.black} />
          <Text style={styles.locationDetails}>{item.date}</Text>
        </View>
        <Text style={styles.name}>{item.title}</Text>
        <View style={styles.infoSeeMore}>
          <Text style={styles.price}>$ {item.price}.-</Text>
          <TouchableOpacity onPress={onSelected}>
            <LinearGradient colors={["#FF8D74", "#F65734"]} style={styles.buttonSeeMore}>
              <Text style={styles.seeMore}>Ver</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ProductItem;
