import { useLayoutEffect } from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import type { MealDetailScreenProps } from "../interfaces/ScreensTypes";
import type { RootState } from "../store/redux/store";
import { MEALS } from "../data/dummy-data";

export default function MealDetailScreen({
  route,
  navigation,
}: MealDetailScreenProps) {
  // Call and use context (Context)(* = replace to context value if using context)
  // const favoriteMealsCtx = useContext(FavoritesContext);
  // (Redux)
  const favoriteMealIds = useSelector(
    (state: RootState) => state.favoriteMeals.ids
  );
  const dispatch = useDispatch();
  // Get id from route object and find the meal
  const mealId = route.params.mealId;
  const selectedMeal = MEALS!.find((meal) => meal.id === mealId);
  // Check is meal in favourite list or not (*)
  const mealIsFavorite = favoriteMealIds.includes(mealId);
  // Header button (*)
  const changeFavoriteStausHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  // Add button to header bar using navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onPress={changeFavoriteStausHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStausHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
