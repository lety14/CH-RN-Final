import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { CardProduct } from "../../components";
import { colors } from "../../constants/colors.constants";
import { RootStackParamList } from "../../navigation/offerts";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { filteredProducts, selectProduct } from "../../store/slices/products.slice";
import IProduct from "../../types/IProduct.type";
import { styles } from "./styles";

type ProductsProps = NativeStackScreenProps<RootStackParamList, "Products">;

const Products = ({ navigation, route }: ProductsProps) => {
  const categoriesSelected = useAppSelector((state) => state.categories.selected?.id);
  const productsFiltered = useAppSelector((state) => state.products.filteredProducts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filteredProducts(categoriesSelected));
  }, []);

  const renderItem = ({ item, index }: { item: IProduct; index: number }): JSX.Element => (
    <View style={styles.item}>
      <CardProduct
        item={item}
        onSelected={() => {
          dispatch(selectProduct(item));
          navigation.navigate("Product", {
            productId: item.id,
            name: item.title,
          });
        }}
      />
    </View>
  );
  const keyExtractor = (product: IProduct, index: number) => product.id.toString();

  return (
    <LinearGradient style={styles.container} colors={[colors.primary, "#ffffff"]}>
      <FlatList data={productsFiltered} renderItem={renderItem} keyExtractor={keyExtractor} />
    </LinearGradient>
  );
};

export default Products;
