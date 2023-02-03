import { FlatList, ListRenderItem } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import type { CatrgoriesScreenProps } from "../interfaces/ScreensTypes";
import Category from "../models/category";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen({
  navigation,
}: CatrgoriesScreenProps) {
  const renderCategoryItem: ListRenderItem<Category> = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={() =>
          navigation.navigate("MealsOverview", { categoryId: item.id })
        }
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
