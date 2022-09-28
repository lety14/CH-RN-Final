import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { CategoryItem, FadeIn } from "../../components";
import { RootStackParamList } from "../../navigation/offerts";
import { selectCategory } from "../../store/slices/categories.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ICategory from "../../types/ICategory.type";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants/colors.constants";

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
      <LinearGradient style={styles.details} colors={[colors.primary, "#ffffff"]}>
        <Image
          source={require("../../../assets/bakground/Frame-3.png")}
          style={styles.imageFrame3}
        />

        <Image
          source={require("../../../assets/bakground/Frame-3.png")}
          style={styles.imageFrame5}
        />

        <Image
          source={require("../../../assets/bakground/Frame-2.png")}
          style={styles.imageFrame2}
        />

        <Image source={require("../../../assets/bakground/Frame.png")} style={styles.imageFrame4} />

        <Image
          source={require("../../../assets/bakground/Frame-1.png")}
          style={styles.imageFrame1}
        />

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
