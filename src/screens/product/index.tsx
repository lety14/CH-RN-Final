import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FadeIn } from "../../components";
import { RootStackParamList } from "../../navigation/offerts";
import { useAppSelector } from "../../store/hooks";
import { styles } from "./styles";

type ProductProps = NativeStackScreenProps<RootStackParamList, "Product">;

const Product = ({ navigation, route }: ProductProps) => {
  const product = useAppSelector((state) => state.products.selected);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image source={product?.image} style={styles.image} />
      <Text style={styles.name}>{product?.title}</Text>
     </View>
      <ScrollView style={styles.details}>
        
        <FadeIn delay={200}>
        <Text style={styles.pack}>Pack: {product?.pack}</Text>
        <Text style={styles.pack}>Fecha salida: {product?.date}</Text>

          <Text style={styles.description}>{product?.description}</Text>
        </FadeIn>
        <FadeIn delay={400}>
          <Text style={styles.detail}>Pais: {product?.country}</Text>
        </FadeIn>
        <FadeIn delay={600}>
          <Text style={styles.detail}>Region: {product?.region}</Text>
        </FadeIn>
     
      </ScrollView>
        <TouchableOpacity style={styles.resume}>
      <Text style={styles.price}>RESERVAR</Text>
          <Text style={styles.price}>$ {product?.price?.toFixed(2)}</Text>    
    </TouchableOpacity>
    </View>
  );
};

export default Product;
