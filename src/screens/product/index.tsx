import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ButtonWithConfirmation, FadeIn } from "../../components";
import { RootStackParamList } from "../../navigation/offerts";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/colors.constants";
import { addItem } from "../../store/slices/cart.slice";
import MapPreview from "../../components/map-preview";
import { SafeAreaView } from "react-native-safe-area-context";

type ProductProps = NativeStackScreenProps<RootStackParamList, "Product">;

const Product = ({ navigation, route }: ProductProps) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.products.selected);

  const onHandleAddToCart = () => {
    {
      product !== undefined && dispatch(addItem(product));
    }
  };

  console.log(product?.coords);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {product && (
          <TouchableOpacity
            style={styles.buttonReturn}
            onPress={() =>
              navigation.navigate("Products", {
                categoryId: product.categoryId,
              })
            }>
            <Ionicons name="arrow-undo-sharp" size={20} color={colors.white} />
          </TouchableOpacity>
        )}
        <Image source={product?.image} style={styles.image} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.4)"]}
          locations={[0.6, 0.8]}
          style={styles.background}
        />
        <Text style={styles.name}>{product?.title}</Text>
      </View>
      <ScrollView style={styles.details}>
        <FadeIn delay={200}>
          <Text style={styles.pack}>Pack: {product?.pack}</Text>
          <Text style={styles.pack}>Fecha salida: {product?.date}</Text>
          <Text style={styles.pack}>Precio: $ {product?.price?.toFixed(2)}</Text>

          <Text style={styles.description}>{product?.description}</Text>
        </FadeIn>
        <FadeIn delay={400}>
          <Text style={styles.detail}>Pais: {product?.country}</Text>
        </FadeIn>
        <FadeIn delay={600}>
          <Text style={styles.detail}>Region: {product?.region}</Text>
        </FadeIn>
        <FadeIn delay={800}>
          <View style={styles.map}>
            <MapPreview location={product?.coords} zoom={12} />
          </View>
        </FadeIn>
      </ScrollView>
      <View style={styles.sectionBuy}>
        <Text style={styles.price}>$ {product?.price?.toFixed(2)}</Text>
        <ButtonWithConfirmation
          text="Agregar"
          icon="add-circle-outline"
          textSuccess="Agregado"
          iconSuccess="checkmark-circle-outline"
          onHandleClick={onHandleAddToCart}
        />
      </View>
    </SafeAreaView>
  );
};

export default Product;
