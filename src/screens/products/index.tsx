import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { FadeIn, CardProduct } from "../../components";
import { RootStackParamList } from "../../navigation/offerts";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { filteredProducts, selectProduct } from "../../store/products.slice";
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
    <FadeIn delay={200 * index}>
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
    </FadeIn>
  );
  const keyExtractor = (product: IProduct, index: number) => product.id.toString();

  return (
    <View style={styles.container}>
      <FlatList data={productsFiltered} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Products;
