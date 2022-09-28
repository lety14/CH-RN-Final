import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { CategoryItem } from "../../components";
import { RootStackParamList } from "../../navigation/offerts";
import { selectCategory } from "../../store/slices/categories.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ICategory from "../../types/ICategory.type";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: HomeProps) => {
  const categories = useAppSelector((state) => state.categories.categories);

  const dispatch = useAppDispatch();

  const renderItem = ({ item, index }: { item: ICategory; index: number }): JSX.Element => (
    <View>
      <CategoryItem
        item={item}
        onSelected={() => {
          dispatch(selectCategory(item));
          navigation.navigate("Products", {
            categoryId: item.id,
            name: item.title,
          });
        }}
      />
    </View>
  );
  const keyExtractor = (item: ICategory, index: number) => item.id.toString();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/home-categories.png")} style={styles.image} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.5)"]}
          locations={[0.6, 0.8]}
          style={styles.background}
        />
        <View style={styles.brandContainer}>
          <Text style={styles.brand}>ADVENTURE</Text>
          <Text style={styles.subtitle}>Encontrá tu destino ideal</Text>
        </View>
      </View>

      <LinearGradient style={styles.details} colors={["#f5f5f5", "#ffffff"]}>
        <Text style={styles.title}>Categorias</Text>
        <FlatList
          style={styles.grid}
          data={categories}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </LinearGradient>
    </View>
  );
};

export default Home;
