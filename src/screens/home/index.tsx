import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {  FlatList, Image, ScrollView, Text, View } from "react-native";
import { ButtonComponent, CategoryItem, FadeIn } from "../../components";
import { RootStackParamList } from "../../navigation/offerts";
import { selectCategory } from "../../store/categories.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ICategory from "../../types/ICategory.type";
import { styles } from "./styles";


type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: HomeProps) => {
  
  const categories = useAppSelector((state) => state.categories.categories);
  const dispatch = useAppDispatch();



  const renderItem = ({ item, index }: { item: ICategory; index: number }): JSX.Element => (
    <View>
      {/* <FadeIn delay={200 * index}> */}
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
      {/* </FadeIn> */}
    </View>
  );
  const keyExtractor = (item: ICategory, index: number) => item.id.toString();



 return (
<View style={styles.container}>
    {/* <View > */}
     <Image source={require("../../../assets/home-categories.png")} style={styles.image} />
       <Text style={styles.title}>CATEGORIAS</Text>
      <FlatList
        style={styles.grid}
        data={categories}
        renderItem={renderItem}
       keyExtractor={keyExtractor}
       numColumns={2}
      />
     <Text  style={styles.title}>RESEÑAS DE OTROS USUARIOS</Text>
     <ButtonComponent onPress={()=>null} text="Ver opiniones" />
  {/* //  </View > */}
   </View >
  );
};

export default Home;
