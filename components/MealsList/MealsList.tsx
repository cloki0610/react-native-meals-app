import { View, FlatList, StyleSheet, ListRenderItem } from "react-native";

import MealItem from "./MealItem";
import Meal from "../../models/meal";

export default function MealsList({ items }: { items: Meal[] }) {
  const renderMealItem: ListRenderItem<Meal> = ({ item }) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
