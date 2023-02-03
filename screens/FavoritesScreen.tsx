import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealsList from "../components/MealsList/MealsList";
import type { RootState } from "../store/redux/store";
import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen() {
  // (Context)
  // const favoriteMealsCtx = useContext(FavoritesContext);
  // (Redux)
  const favoriteMealIds = useSelector(
    (state: RootState) => state.favoriteMeals.ids
  );
  // Filter the data to get require favorite list
  const favoriteMeals = MEALS.filter(
    (meal) => favoriteMealIds.includes(meal.id) // (Replace data if using context)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
